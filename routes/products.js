const express = require('express');
const router = express.Router();
const methodOverride = require('method-override');

let productId = 0;

let db = require('../models/products');

router.use(methodOverride('_method'));

router.get('/', (req,res) => {
  db.getAllProducts()
  .then( products => {
    res.render('products/index', {"products": products});
  } );
});

router.get('/new', (req,res) => {
  res.render('products/new' );
});

router.post('/', (req,res) => {
  db.addNewProduct(req.body.name, req.body.price, req.body.inventory)
    .then( products => {
      res.redirect('/products');
  } );
});

router.get('/:id', (req,res) => {
  db.getProductId(req.params.id)
  .then( products => {
    console.log(req.params.id);
    res.render('products/product', {"products": products});
  } );
});

router.get('/:id/edit', (req,res) => {
  db.getProductByNametoEdit(req.params.id)
  .then( products => {
    res.render('products/edit', {products});
  });
});

router.put('/:id', (req, res) => {
  db.editProduct(req.params.id, req.body.price, req.body.inventory);
  res.redirect(303, `/products`);
});

router.delete('/:id', (req, res) => {
  db.deleteProduct(req.params.title);
  res.redirect('/products');
});

module.exports = router;