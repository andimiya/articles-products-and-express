const express = require('express');
const router = express.Router();
const methodOverride = require('method-override');

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
  res.render('articles/new' );
});

router.post('/', (req,res) => {
  db.addNewArticle(req.body.title, req.body.body, req.body.author)
  .then ( articles => {
    // let urlEncode = encodeURIComponent(String(req.body.title));
    // newArticle.urlTitle = urlEncode;
    res.redirect('/articles');
  } );
});

router.get(`/:title`, (req, res) => {
  // let reqTitle = req.body.title;
  // let article = null;

  db.getArticleByTitle(req.params.title)
  .then ( articles => {

    console.log('article title', req.params.title);
    res.render(`articles/article`, {"articles": articles});
  } );
});

router.get('/:title/edit', (req, res) => {
  db.getArticleByTitletoEdit(req.params.title)
  .then ( articles => {
    res.render(`articles/edit`, {articles});
  } );
});

router.put('/:title', (req, res) => {
  db.editArticle(req.params.title, req.body.body, req.body.author);
  console.log(req.params, 'req params console');
  res.redirect('/articles');
});

router.delete('/:title', (req, res) => {
  db.deleteArticle(req.params.title);
  res.redirect('/articles');
});
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