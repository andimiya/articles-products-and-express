const express = require('express');
const ProductsDb = require('../db/products');
const router = express.Router();

const postArray = [];

router.post('/', (req,res) => {
  postArray.push(req.body);
  console.log(postArray);
  res.send('Post test');
  res.end('end');
});

router.get('/', (req,res) => {
  console.log('req body',req.body);
  res.send('GET test');
  res.end('end');
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