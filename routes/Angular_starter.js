var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//Home Page
router.get('/', function(req, res, next){
	Angular_starter.find(function(err, angular_starter){
		if(err) return next(err);
		res.json(angular_starter)
	});
});

router.post('/', function(req, res, next){
	Angular_starter.create(req.body, function(err, angular_starter){
		if(err) return next(err);
		res.json(angular_starter);
	});
});

module.exports = router;