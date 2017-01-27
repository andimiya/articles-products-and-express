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



module.exports = {
  getAllArticles: getAllArticles
// //   // getSinglePuppy: getSinglePuppy,
// //   // createPuppy: createPuppy,
// //   // updatePuppy: updatePuppy,
// //   // removePuppy: removePuppy
};