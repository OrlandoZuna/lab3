import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
//import mustacheExpress from "mustache-express";
import index from "./routes/index.js";
import service from "./routes/service.js";
import usersRouter from "./routes/users.js";
/*var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var service = require('./routes/service');*/
const __dirname = "./";
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/index', index);
app.use('/users', usersRouter);
app.use('/', service);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  console.log(err.message);
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
const port = 8000;
app.listen(port, () =>{
console.log("Corriendo en el puerto " + port)
});

export default app;
/*"devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-core": "^6.26.3",
    "babel-preset-env": "^1.7.0"
    "dev": "babel-node routes/service.js",
  }*/