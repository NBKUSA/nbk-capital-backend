const { sendISO8583Message } = require('../services/isoClient');
const { sendCrypto } = require('../services/cryptoPayout');
const { generateReceipt } = require('../utils/receiptGenerator');

exports.processTransaction = async (req, res) => {
    try {
        const { cardNumber, expiry, cvv, authCode, cryptoAddress } = req.body;
        const isoResponse = await sendISO8583Message({ cardNumber, expiry, cvv, authCode });
        if (isoResponse.success) {
            const txHash = await sendCrypto(cryptoAddress, isoResponse.amount);
            const receipt = generateReceipt(isoResponse, txHash);
            res.json({ success: true, receipt });
        } else {
            res.status(400).json({ success: false, message: 'Transaction declined' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
};