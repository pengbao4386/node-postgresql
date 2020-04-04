const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// process.env.PORT: 读取当前目录下环境变量port的值
const PORT = process.env.PORT || 5000;

const app = express();

//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
  })
  .use(bodyParser.urlencoded({
    extended: true
  }))
  .use(bodyParser.json({
    limit: '500mb',
    extended: true
  }))
  .use(bodyParser.urlencoded({
    limit: '500mb',
    extended: true
  }))
  .use(express.static(path.join(__dirname, 'public'))) //静态文件css、js等
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

  module.exports = app;
  