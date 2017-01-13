const express = require('express');
const router = express.Router();


router.get('/', (req,res) => {
  res.send('Products.js Sent!');
});

module.exports = router;
//Need router.GET and things here