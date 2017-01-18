const express = require('express');
const router = express.Router();
const server = require('../server');
const methodOverride = require('method-override');

let productId = 0;
let productsArray = require('../db/products');

router.use(methodOverride('_method'));

router.get('/', (req,res) => {
  res.render('products/product', {"prods": productsArray});
});

router.get('/new', (req,res) => {
  res.render('products/new');
});

router.get('/:id', (req,res) => {

  let reqId = parseInt(req.params.id);
  console.log(reqId);
  let product = null;

  for (var i = 0; i < productsArray.length; i++){
    if (productsArray[i].id === reqId) {
      product = productsArray[i];
    }
  }
  if (product !== null) {
    res.render('products/product', {"prods": [products]});
  }
  else {
    return res.send('error');
  }
});

router.get('/:id/edit', (req,res) => {

  let reqId = parseInt(req.params.id);
  let product = null;

  for (var i = 0; i < productsArray.length; i++){
    if (productsArray[i].id === reqId) {
      product = productsArray[i];
    }
  }
  if (product !== null) {
  res.render('products/edit', {product});
  }
});

router.post('/', (req,res) => {
  let newProduct = req.body;

  if (res.status(200)){
    productsArray.push(newProduct);
    newProduct.id = productId++;
    let prods =
    res.redirect('/products');
  }
  else {
    res.redirect('/products/new');
  }
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
//Need router.GET and things here



// var Articles = require('db/articles.js');

// // returns the entire collection
// Articles.all();

// // adds a new article to the collection
// Articles.add({...});

// // returns the correct object from the collection
// Articles.getByTitle('The%20Best%20Magpie%20Developer%20of%202016');

// // finds an article in the collection by its title, if found - updates the article based on object passed as the second parameter then returns `true`
// // in the example below, it would change the title.
// // if the article is not found, returns `false`
// Articles.editByTitle('The%20Best%20Magpie%20Developer%20of%202016', { title: "..."});