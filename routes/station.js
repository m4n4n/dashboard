var express = require('express');
var mysql = require('mysql');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('station');
});

router.post('/add', function(req, res, next) {
	console.log(req.body.user_name);
	console.log(req.body.user_pass);

	var con = mysql.createConnection({
     host: "localhost",
     user: "root",
     password: "manan198518",
     database: "train_dashboard"
	});

	con.connect(function(err) {
		if (err) throw  err;
		console.log("connected");
		var sql = "INSERT INTO `station`(`station_name`,`station_code`,'station_long','station_latitude') VALUES ('"+req.body.user_name+"','"+req.body.user_pass+"')";
		con.query(sql, function(err, result)  {
			if(err) throw err;
			console.log("table created");
		});
	});
return res.redirect('/');
});
	module.exports = router;
