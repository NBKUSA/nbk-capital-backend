require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/pay', (req, res) => {
  const { number, holder, expiry, cvv, amount } = req.body;
  // Here you would integrate with your payment gateway.
  // For demonstration, return success if all fields exist.
  if (number && holder && expiry && cvv && amount) {
    return res.json({ success: true });
  }
  res.status(400).json({ error: 'Invalid input' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
