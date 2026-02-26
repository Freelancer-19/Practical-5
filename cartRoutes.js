const express = require('express');
const router = express.Router();

let cart = []; 

router.get('/', (req, res) => res.json(cart));

router.post('/add', (req, res) => {
  const { productId, qty } = req.body;
  cart.push({ productId, qty });
  res.json({ message: "Added to cart", cart });
});

module.exports = router;