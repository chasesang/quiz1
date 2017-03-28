const Express = require('express');
const router = Express.Router();
const db = require('../db/conn');

router.get('/', function (req, res, next) {
  db.query(`SELECT * FROM posts ORDER BY LENGTH(content) DESC`)
  .then(function (posts) {
    console.log("showing database");
  res.render('posts/index', {posts: posts});
    })
    .catch(function (err) {
        res.send(err);
    });
})

router.get('/', function (req, res, next) {
  res.render('index');
})

router.post('/', function (req, res, next) {
  const post = req.body;
  db.query(`
    INSERT INTO posts (title, content) VALUES ($<username>, $<message>)
  `, post
  ).then(function () {
    console.log("insert database");
    res.redirect('/posts')
  }).catch(function (err) { res.send(err) })
})

module.exports = router;









/* */
