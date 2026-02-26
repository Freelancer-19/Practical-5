// utils/validationSchemas.js
const { z } = require('zod');

const productSchema = z.object({
  name: z.string().min(2, "Name too short"),
  price: z.number().positive("Price must be greater than 0"),
  category: z.string()
});

const userSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6)
});

module.exports = { productSchema, userSchema };