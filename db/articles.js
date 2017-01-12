const express = require('express');
const app = express();

const products = { name: String, price: String, inventory: String };

app.get('/products', (req, res) => {
  res.json(products);
});