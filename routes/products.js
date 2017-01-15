const express = require('express');
const products = require('../db/products');
const router = express.Router();
const server = require('../server');
// const methodOverride = require('method-override');

// router.use(methodOverride('X-HTTP-Method-Override'));

let productsArray = [];
let productId = 0;

router.get('/', (req,res) => {
  res.render('products/product', {"prods": productsArray});

});

router.get('/new', (req,res) => {
  res.render('products/new');
});

router.get('/:id', (req,res) => {

  let reqId = parseInt(req.params.id);
  console.log(reqId);
  let products = null;

  for (var i = 0; i < productsArray.length; i++){
    if (productsArray[i].id === reqId) {
      products = productsArray[i];
    }
  }
  if (products !== null) {
    console.log('found');
    console.log({"prods": [products]});
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
      return res.json(products);
    }
    else {
      console.log('not found');
      return res.send('error');
    }
  }
    res.render('products/edit');
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
    console.log('error');
    res.render('/products/error');
    res.redirect('/products/new');
  }
});

// If req.body.id matches an id in the postArray collection
  // Then replace that objects name property to be the new req.body.name value
  //

router.put('/:id', (req, res) => {

  console.log('req url', req.params.id);

  let newProduct = req.body;
  let reqId = parseInt(req.params.id);

  console.log(typeof productsArray[1]);

  let product = null;

  for (var i = 0; i < productsArray.length; i++){
    if (productsArray[i].id === reqId) {
      product = productsArray[i];
    }
  }
  if (product !== null){
    product.name = newProductName;
    product.price = newProductPrice;
    res.json( {Message: "Product Edited"} );
    // res.redirect(303, `/products/${newID}`);
  }
  else {
      console.log('not found');
      res.send('error');
      // res.redirect('/:id/edit');
  }
});


router.delete('/:id', (req, res) => {
  let newId = String(req.params.id);

  for (var i = 0; i < productsArray.length; i++) {
    if (productsArray[i].id === newId) {
      productsArray.splice(i, 1);
      console.log(productsArray);
      res.end('end');
    }
    else{
      console.log('error');
    }
    // res.redirect(303, '/products');
  }

  //if req.body.id matches an id in the postArray collection
  //Then delete that entire object
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