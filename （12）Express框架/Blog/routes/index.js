var express = require('express');
const {users, chapterList} = require('../data.json')
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {  
  res.render('login');
});
router.post('/', function(req, res, next) {
  var data = req.body;
  for (var i = 0; i < users.length; i++) {
      if (data.username === users[i].username && data.password === users[i].password) {
          res.render('list', { chapterList: chapterList });
          return ;
      }
  }
  res.set('Content-Type','text/html; charset=utf-8');    
  res.end("用户名密码错误，请核实！");
});

module.exports = router;
