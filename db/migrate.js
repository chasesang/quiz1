const db = require('./conn');

db.query(`
  CREATE TABLE posts (
    id SERIAL,
    title VARCHAR(255),
    content VARCHAR(255)
  )
`).then(function () {

  console.log('🛠 Created table posts!');
  process.exit();
}).catch(function (error) {

  console.error(error);
  process.exit();
})
