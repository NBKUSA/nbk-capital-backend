const net = require('net');
const { ISO_HOST, ISO_PORT } = require('../config/iso8583');

exports.sendISO8583Message = ({ cardNumber, expiry, cvv, authCode }) => {
    return new Promise((resolve) => {
        const client = new net.Socket();
        client.connect(ISO_PORT, ISO_HOST, () => {
            const message = `ISO8583|${cardNumber}|${expiry}|${cvv}|${authCode}`;
            client.write(message);
        });
        client.on('data', (data) => {
            client.destroy();
            resolve({ success: true, amount: 100, transactionId: 'TX123456' });
        });
        client.on('error', () => resolve({ success: false }));
    });
};
