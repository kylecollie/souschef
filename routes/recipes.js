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
    db.recipes.findOne({
        _id: mongojs.ObjectId(req.params.id)
    }, function (err, recipes) {
        if (err) {
            res.send(err);
        }
        res.json(recipes);
    });
});

// Save new recipe
router.post('/recipe', function (req, res, next) {
    var recipe = req.body;
    if (!recipe.title) {
        res.status(400);
        res.json({
            "error": "Bad data"
        });
    } else {
        db.recipes.save(recipe, function (err, recipe) {
            if (err) {
                res.send(err);
            }
            res.json(recipes);
        });
    }
});

// Delete a recipe
router.delete('/recipe/:id', function (req, res, next) {
    db.recipes.remove({
        _id: mongojs.ObjectId(req.params.id)
    }, function (err, recipes) {
        if (err) {
            res.send(err);
        }
        res.json(recipes);
    });
});

// Update existing recipe
router.put('/recipe/:id', function (req, res, next) {
    var recipe = req.body;
    var updRecipe = {};

    if (recipe.title) {
        updRecipe.title = recipe.title;
    }

    if (recipe.description) {
        updRecipe.description = recipe.description;
    }

    if (recipe.ingredients) {
        updRecipe.ingredients = recipe.ingredients;
    }

    if (recipe.instructions) {
        updRecipe.instructions = recipe.instructions;
    }

    if (recipe.tags) {
        updRecipe.tags = recipe.tags;
    }

    if (!updRecipe) {
        res.status(400);
        res.json({
            "error": "Bad data"
        });
    } else {
        db.recipes.update({
            _id: mongojs.ObjectId(req.params.id)
        }, updRecipe, {}, function (err, recipes) {
            if (err) {
                res.send(err);
            }
            res.json(recipes);
        });
    }
});


module.exports = router;