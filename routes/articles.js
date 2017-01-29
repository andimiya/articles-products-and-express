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
    res.render('articles/index', {"articles": articles});
  } );
});

router.get('/new', (req,res) => {
  db.getAllArticles()
  .then( articles =>  {
    res.render('articles/new', {"articles": articles} );
  } );
});

router.post('/', (req,res) => {
  db.addNewArticle(req.body.title, req.body.body, req.body.author)
  .then ( articles => {
    // let urlEncode = encodeURIComponent(String(req.body.title));
    // newArticle.urlTitle = urlEncode;
    res.redirect('/articles');
  } );
});

router.get('/:title', (req, res) => {
  // let reqTitle = req.body.title;
  // let article = null;

  db.getArticleByTitle(req.params.title)
  .then ( articles => {

    console.log('article title', req.params.title);
    res.render('articles/article', {"articles": articles});
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