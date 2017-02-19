// recipe.service.ts
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/do');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/throw');
require('rxjs/add/operator/map');
require('rxjs/add/observable/of');
var RecipeService = (function () {
    function RecipeService(http) {
        this.http = http;
        this.baseUrl = '/api/recipes';
    }
    RecipeService.prototype.getRecipes = function () {
        return this.http
            .get('/api/recipes')
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RecipeService.prototype.getRecipe = function (id) {
        return this.http
            .get('api/recipe/' + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RecipeService.prototype.addRecipe = function (newRecipe) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post(this.baseUrl, JSON.stringify(newRecipe), {
            headers: headers
        })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RecipeService.prototype.deleteRecipe = function (id) {
        return this.http
            .delete('api/recipe/' + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RecipeService.prototype.saveRecipe = function (recipe) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        console.log(JSON.stringify(recipe));
        if (!recipe._id) {
            return this.createRecipe(recipe, options);
        }
        return this.updateRecipe(recipe, options);
    };
    RecipeService.prototype.createRecipe = function (recipe, options) {
        recipe._id = undefined;
        return this.http.post('api/recipe/', recipe, options)
            .map(this.extractData)
            .do(function (data) { return console.log('createRecipe: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    RecipeService.prototype.updateRecipe = function (recipe, options) {
        var url = 'api/recipe' + "/" + recipe._id;
        console.log(url);
        return this.http.put(url, recipe, options)
            .map(function () { return recipe; })
            .do(function (data) { return console.log('updateRecipe: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    RecipeService.prototype.extractData = function (response) {
        var body = response.json();
        return body.data || {};
    };
    RecipeService.prototype.handleError = function (error) {
        console.error(error);
        var msg = "Error status code " + error.status + " at " + error.url;
        console.log(msg);
        return Observable_1.Observable.throw(msg);
    };
    RecipeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RecipeService);
    return RecipeService;
}());
exports.RecipeService = RecipeService;
//# sourceMappingURL=recipe.service.js.map