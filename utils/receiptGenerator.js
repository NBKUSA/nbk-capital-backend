exports.generateReceipt = (isoData, txHash) => {
    return {
        transactionId: isoData.transactionId,
        amount: isoData.amount,
        blockchainTx: txHash,
        timestamp: new Date().toISOString()
    };
};
