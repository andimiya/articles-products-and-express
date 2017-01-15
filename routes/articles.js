const express = require('express');
const articles = require('../db/articles');
const router = express.Router();
const server = require('../server');
// const methodOverride = require('method-override');

// router.use(methodOverride('X-HTTP-Method-Override'));

let articlesArray = [];
let articleId = 0;

router.get('/', (req,res) => {
  res.render('articles/article', {"articles": articlesArray});
});

router.get('/new', (req,res) => {
  res.render('articles/new');
});

router.get('/:id', (req,res) => {

  let reqId = parseInt(req.params.id);
  console.log(reqId);
  let article = null;

  for (var i = 0; i < articlesArray.length; i++){
    if (articlesArray[i].id === reqId) {
      article = articlesArray[i];
    }
  }
  if (article !== null) {
    res.render('articles/article', {"articles": [articles]});
  }
  else {
    return res.send('error');
  }
});

router.get('/:id/edit', (req,res) => {

  let reqId = parseInt(req.params.id);
  let article = null;

  for (var i = 0; i < articlesArray.length; i++){
    if (articlesArray[i].id === reqId) {
      article = articlesArray[i];
    }
  }
  if (article !== null) {
  res.render('articles/edit', {"articles": articles});
  }
});


router.post('/', (req,res) => {
  let newArticle = req.body;
  let urlEncode = encodeURIComponent(String(req.body.title));
  console.log(urlEncode);

  if (res.status(200)){
    articlesArray.push(newArticle);
    newArticle.urlTitle = urlEncode;
    let articles =
    res.redirect('/articles');
  }
  else {
    console.log('error');
    res.render('/articles/error');
    res.redirect('/articles/new');
  }
});

// If req.body.id matches an id in the postArray collection
  // Then replace that objects name property to be the new req.body.name value
  //

router.put('/:id', (req, res) => {

  console.log('req url', req.params.id);

  let newArticle = req.body;
  let reqId = parseInt(req.params.id);

  let article = null;

  for (var i = 0; i < articlesArray.length; i++){
    if (articlesArray[i].id === reqId) {
      article = articlesArray[i];
    }
  }
  if (article !== null){
    article.name = newArticleName;
    article.price = newArticlePrice;
    res.json( {Message: "Article Edited"} );
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

  for (var i = 0; i < articlesArray.length; i++) {
    if (articlesArray[i].id === newId) {
      articlesArray.splice(i, 1);
      console.log(articlesArray);
      res.end('end');
    }
    else{
      console.log('error');
    }
    // res.redirect(303, '/products');
  }
});



module.exports = router;