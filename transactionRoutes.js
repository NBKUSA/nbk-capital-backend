const express = require('express');
const router = express.Router();
const { processTransaction } = require('../controllers/transactionController');

router.post('/process', processTransaction);
module.exports = router;