const express = require('express');
const router = express.router();

const products = { name: "Product Name", price: "$10.00", inventory: "Inventory" };

router.get('/products', (req, res) => {
  res.json(products);
});

module.exports = router;


//Need router.GET and things here