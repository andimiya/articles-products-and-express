const express = require('express');
// const articles = require('../db/articles');
const router = express.Router();
const methodOverride = require('method-override');

// let articlesArray = require('../db/articles');
let articleId = 0;

let db = require('../models/articles');

router.use(methodOverride('_method'));

router.get('/', (req,res) => {
  db.getAllArticles()
  .then( articles =>  {
    console.log('article console', articles);
    res.render('articles/article', {"articles": articles});
  } );
});

router.get('/new', (req,res) => {
  db.getAllArticles()
  .then( articles =>  {
    console.log('article console', articles);
    res.render('articles/new', {"articles": articles} );
  } );
});

// router.get('/:title', (req,res) => {

//   let reqTitle = req.params.title;
//   let article = null;

//   for (var i = 0; i < articlesArray.length; i++){
//     if (String(articlesArray[i].title) === reqTitle) {
//       article = articlesArray[i];
//     }
//   }
//   if (article !== null) {
//     res.render('articles/article', {"articles": [article]});
//   }
//   else {
//     return res.send('error');
//   }
// });

// router.get('/:title/edit', (req,res) => {

//   let reqTitle = req.params.title;
//   let article = null;

//   for (var i = 0; i < articlesArray.length; i++){
//     if (String(articlesArray[i].title) === reqTitle) {
//       article = articlesArray[i];
//     }
//   }
//   if (article !== null) {
//   res.render('articles/edit', {article});
//   }
// });

// router.post('/', (req,res) => {
//   let newArticle = req.body;
//   let urlEncode = encodeURIComponent(String(req.body.title));
//   console.log(urlEncode);

//   if (res.status(200)){
//     articlesArray.push(newArticle);
//     newArticle.urlTitle = urlEncode;
//     console.log(articlesArray);
//     res.redirect('/articles');
//   }
//   else {
//     res.redirect('/articles/new');
//   }
// });

// router.put('/:title', (req, res) => {
//   let article = null;
//   let reqTitle = req.params.title;
//   let newTitle = req.body.title;
//   let newBody = req.body.body;
//   let newAuthor = req.body.author;

//   for (var i = 0; i < articlesArray.length; i++){
//     if (String(articlesArray[i].title) === reqTitle) {
//       article = articlesArray[i];
//     }
//   }
//   if (article !== null){
//     article.title = newTitle;
//     article.body = newBody;
//     article.author = newAuthor;
//     console.log('new Title', req.body.title);
//     console.log('articlesArray', articlesArray);
//     res.redirect(303, `/articles`);
//   }
//   else {
//       console.log('not found');
//       res.send('error');
//       // res.redirect('/:id/edit');
//   }
// });

// router.delete('/:title', (req, res) => {
//   let reqTitle = req.params.title;
//   for (var i = 0; i < articlesArray.length; i++) {
//     if (String(articlesArray[i].title) === reqTitle) {
//       articlesArray.splice(i, 1);
//       console.log(articlesArray);
//     }
//   }
//   // res.render('articles', {"articles": articlesArray});
//   res.redirect(303, '/articles');
// });

module.exports = router;