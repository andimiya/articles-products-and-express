//pg-promise uses BlueBird

const PG_PASS = process.env.PG_PASS;
const pgp = require('pg-promise')();

const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'has_many_blogs',
  user: 'has_many_user',
  password: PG_PASS
});

console.log(db);

function getAllArticles(req, res, next) {
  db.any('SELECT * FROM articles')
    .then(function(data) {
      res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'Retrieved ALL Articles'
      });
  })
  .catch(function (err) {
    return next(err);
  });
}


// db.any('SELECT * FROM comments LIMIT 10')
// .then( comments => {
//   console.log(comments);
// })
// .catch( err => console.error(err) )


// db.one('SELECT 1+1')
// .then( result => {
//   console.log('result', result);
// })
// .catch( err => console.error(err) )

// db.any('SELECT * FROM users')
// .then( users => {
//   console.log(users);
// })
// .catch( err => console.error(err) )

module.exports = {
  getAllArticles: getAllArticles
  // getSinglePuppy: getSinglePuppy,
  // createPuppy: createPuppy,
  // updatePuppy: updatePuppy,
  // removePuppy: removePuppy
};