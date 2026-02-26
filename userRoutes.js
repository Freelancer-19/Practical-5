const express = require('express');
const router = express.Router();
const { userSchema } = require('../utils/validationSchemas');

router.post('/register', (req, res, next) => {
  try {
    const user = userSchema.parse(req.body);
    res.status(201).json({ message: "User created", user: { email: user.email } });
  } catch (e) { next(e); }
});

module.exports = router;