const TronWeb = require('tronweb');
const { TRON_NODE, TRON_PRIVATE_KEY, TRON_WALLET } = require('../config/crypto');

const tronWeb = new TronWeb({ fullHost: TRON_NODE, privateKey: TRON_PRIVATE_KEY });

exports.sendCrypto = async (to, amount) => {
    const tx = await tronWeb.trx.sendTransaction(to, tronWeb.toSun(amount));
    return tx.txid;
};
