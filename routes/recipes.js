var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/souschef', ['recipes']);

// Get all recipes
router.get('/recipes', function (req, res, next) {
    db.recipes.find(function (err, recipes) {
        if (err) {
            res.send(err);
        }
        res.json(recipes);
    });
});

// Get single recipe
router.get('/recipe/:id', function (req, res, next) {
    db.recipes.findOne({_id: mongojs.ObjectId(req.params.id) }, function (err, recipes) {
        if (err) {
            res.send(err);
        }
        res.json(recipes);
    });
});

module.exports = router;