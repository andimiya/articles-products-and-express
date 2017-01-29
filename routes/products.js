const express = require('express');
const router = express.Router();
const methodOverride = require('method-override');

let productId = 0;
let productsArray = require('../db/products');

let db = require('../models/products');

router.use(methodOverride('_method'));

router.get('/', (req,res) => {
  db.getAllProducts()
  .then( products => {
    res.render('products/index', {"products": products});
  });
});

router.get('/new', (req,res) => {
  res.render('products/new');
});

router.get('/:id', (req,res) => {
  db.getProductId(req.params.id)
  .then( products => {
    console.log(req.params.id);
    res.render('products/product', {"products": products});
  });
});

router.get('/:id/edit', (req,res) => {
  db.getProductByNametoEdit(req.params.id)
  .then( products => {
    res.render('products/edit', {products});
  });
});

router.post('/', (req,res) => {
  db.addNewProduct(req.body.name, req.body.price, req.body.inventory)
    .then( products => {
      res.redirect('/products');
    } );
  });



router.put('/:id', (req, res) => {

  console.log('req url', req.params.id);

  let newProduct = req.body;
  let reqId = parseInt(req.params.id);
  let newName = req.body.name;
  let newPrice = req.body.price;
  let newInventory = req.body.inventory;


  let product = null;

  for (var i = 0; i < productsArray.length; i++){
    if (productsArray[i].id === reqId) {
      product = productsArray[i];
    }
  }
  if (product !== null){
    product.name = newName;
    product.price = newPrice;
    product.inventory = newInventory;
    res.redirect(303, `/products`);
  }
  else {
    res.redirect(303, `/products/${reqId}/edit`);
  }
});


router.delete('/:id', (req, res) => {
  let reqId = parseInt(req.params.id);

  for (var i = 0; i < productsArray.length; i++) {
    if (productsArray[i].id === reqId) {
      productsArray.splice(i, 1);
      console.log(productsArray);
    }
  }
  res.redirect(303, '/products');
});


module.exports = router;