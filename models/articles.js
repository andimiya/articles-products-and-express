//pg-promise uses BlueBird

const PG_PASS = process.env.PG_PASS;
const pgp = require('pg-promise')();

const database = pgp({
  host: 'localhost',
  port: 5432,
  database: 'articles_db',
  user: 'articles_user',
  password: PG_PASS

});

const getAllArticles = () => {
  return database.any('SELECT * FROM article');
};

const addNewArticle = (title, body, author) => {
  return database.any(`INSERT INTO article (title, body, author) VALUES ('${title}', '${body}', '${author}')`);
};

const getArticleByTitle = (title) => {
  return database.any(`SELECT * FROM article WHERE title = '${title}'`);
};

const getArticleByTitletoEdit = (title) => {
  return database.any(`SELECT * FROM article WHERE title = '${title}'`);
};

const editArticle = (title, body, author) => {
  return database.any(`UPDATE article SET body = '${body}', author = '${author}' WHERE title = '${title}'`);
};

const deleteArticle = (title) => {
  return database.any(`DELETE FROM article WHERE title = '${title}'`);
};

module.exports = {
  getAllArticles: getAllArticles,
  addNewArticle: addNewArticle,
  getArticleByTitle: getArticleByTitle,
  getArticleByTitletoEdit: getArticleByTitletoEdit,
  editArticle: editArticle,
  deleteArticle: deleteArticle
};