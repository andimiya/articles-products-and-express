const express = require('express');
const articles = require('../db/articles');
const router = express.Router();
const server = require('../server');

let articlesArray = [];
let articleId = 0;

router.get('/', (req,res) => {
  res.render('articles/article', {"articles": articlesArray});
});

router.get('/new', (req,res) => {
  res.render('articles/new');
});

router.get('/:title', (req,res) => {

  let reqTitle = req.params.title;
  let article = null;

  for (var i = 0; i < articlesArray.length; i++){
    if (String(articlesArray[i].title) === reqTitle) {
      article = articlesArray[i];
    }
  }
  if (article !== null) {
    res.render('articles/article', {"articles": [article]});
  }
  else {
    return res.send('error');
  }
});

router.get('/:title/edit', (req,res) => {

  let reqTitle = req.params.title;
  let article = null;

  for (var i = 0; i < articlesArray.length; i++){
    if (String(articlesArray[i].title) === reqTitle) {
      article = articlesArray[i];
    }
  }
  if (article !== null) {
  res.render('articles/edit', {article});
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

router.put('/:title', (req, res) => {

  console.log('req url', req.params.id);

  let newArticle = req.body;
  let reqTitle = req.params.title;
  console.log('reqTitle', reqTitle);
  console.log('articles Array Title', articlesArray[0].title);

  let article = null;

  for (var i = 0; i < articlesArray.length; i++){
    if (articlesArray[i].title === reqTitle) {
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


router.delete('/:title', (req, res) => {
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