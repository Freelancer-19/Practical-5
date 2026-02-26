const express = require('express');
const router = express.Router();
const { productSchema } = require('../utils/validationSchemas');

let products = []; // Temporary Mock DB

router.get('/', (req, res) => res.json(products));

router.post('/', (req, res, next) => {
  try {
    const validatedData = productSchema.parse(req.body);
    const newProduct = { id: Date.now(), ...validatedData };
    products.push(newProduct);
    res.status(201).json(newProduct);
  } catch (error) {
    next(error); // Sends Zod errors to errorHandler.js
  }
});

module.exports = router;