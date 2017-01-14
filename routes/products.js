const express = require('express');
const products = require('../db/products');
const router = express.Router();
const server = require('../server');

let productsArray = [];
let productId = 0;


router.get('/', (req,res) => {
  res.send('GET test');
  res.end('end');
});

router.post('/', (req,res) => {
  let newProduct = req.body;

  if (res.status(200)){
  productsArray.push(newProduct);
  newProduct.id = productId++;
  console.log(productsArray);
  // console.log(productsArray[0].id, 'productsArray1 ID');
  res.redirect('/products');
  }
  else {
  console.log('error');
  res.redirect('/products/new');
  }
});


router.put('/', (req, res) => {

  let newProduct = req.body;
  let newProductName = req.body.name;
  let newProductPrice = req.body.price;

  let newId = Number(req.body.id);

  // console.log('newId', typeof newId);
  // console.log('productsArrayId', typeof productsArray[1].id);


  for (var i = 0; i < productsArray.length; i++){

    if (productsArray[i].id === newId) {
      console.log('found');
      productsArray[i].name = newProductName;
      productsArray[i].price = newProductPrice;
      res.redirect('/products/:id');
    }
    else {
      console.log('not found');
      res.redirect('/products/:id/edit');
    }
  }


  // If req.body.id matches an id in the postArray collection
  // Then replace that objects name property to be the new req.body.name value
  //

  res.end('end');
});

router.delete('/:id', (req, res) => {
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