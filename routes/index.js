var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', function (err, html) {
        res.send(html);
        res.end();
    });
});


module.exports = router;
