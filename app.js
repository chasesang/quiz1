
const PORT = 5001;
const colors = require('colors');
const path =  require('path');
const Express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const posts = require('./routes/posts');
const app = Express();
const home = require('./routes/home');
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(Express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/posts', posts);
app.use('/', home);
app.listen(PORT, function () {
  console.log(`Server listening on http://localhost:${PORT}...`)
});














/* */
