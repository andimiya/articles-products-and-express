//pg-promise uses BlueBird

const PG_PASS = process.env.PG_PASS;
const pgp = require('pg-promise')();

const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'articles_db',
  user: 'article_user',
  password: PG_PASS
});

const getAllArticles = () => {
    return db.any('SELECT * FROM articles');
};



module.exports = {
  getAllArticles: getAllArticles
// //   // getSinglePuppy: getSinglePuppy,
// //   // createPuppy: createPuppy,
// //   // updatePuppy: updatePuppy,
// //   // removePuppy: removePuppy
};