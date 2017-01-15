const express = require('express');
const products = require('../db/products');
const router = express.Router();
const server = require('../server');
const methodOverride = require('method-override');

router.use(methodOverride('X-HTTP-Method-Override'));


let productsArray = [];
let productId = 0;


router.get('/', (req,res) => {
  res.end('end');
});

router.post('/', (req,res) => {
  let newProduct = req.body;

  if (res.status(200)){
  productsArray.push(newProduct);
  newProduct.id = productId++;
  console.log(productsArray);
  res.redirect('/');
  }
  else {
  console.log('error');
  res.redirect('/new');
  }
});


router.put('/', (req, res) => {

  let newProduct = req.body;
  let newProductName = req.body.name;
  let newProductPrice = req.body.price;
  let newId = Number(req.body.id);

  for (var i = 0; i < productsArray.length; i++){

    if (productsArray[i].id === newId) {
      console.log('found');
      productsArray[i].name = newProductName;
      productsArray[i].price = newProductPrice;
      res.end('end');
      return;
      // res.redirect('/:id');
    }
    else {
      console.log('not found');
      res.end('end');
      // res.redirect('/:id/edit');
    }
  }


  // If req.body.id matches an id in the postArray collection
  // Then replace that objects name property to be the new req.body.name value
  //

  // res.end('end');
});

router.delete('/', (req, res) => {
  let newId = Number(req.body.id);

  console.log('productsArray i ', productsArray[1]);

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