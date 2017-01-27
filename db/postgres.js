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

db.any('SELECT * FROM comments LIMIT 10')
.then( comments => {
  console.log(comments);
})
.catch( err => console.error(err) )


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

// module.exports = {
//   getAllPuppies: getAllPuppies,
//   getSinglePuppy: getSinglePuppy,
//   createPuppy: createPuppy,
//   updatePuppy: updatePuppy,
//   removePuppy: removePuppy
// };