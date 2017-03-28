// this is ad different file than app.js
// if we want to use the express package, we must require it again

const Express = require('express');
const router = Express.Router();

router.get('/', function (req, res, next) {
  res.render('index');
})


module.exports = router;
