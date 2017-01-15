// recipe.service.ts

import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Recipe } from '../../models/Recipe';

@Injectable()
export class RecipeService {
    constructor(private http: Http) { }

    getRecipes() {
        return this.http
            .get('/api/recipes')
            .map((response: Response) => <Recipe[]>response.json())
            .catch(this.handleError);
    }

    getRecipe(id) {
        return this.http
            .get('api/recipe/' + id)
            .map(res => res.json())
            .catch(this.handleError);
    }

    addRecipe(newRecipe) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post('/api/recipe',
            JSON.stringify(newRecipe),
            {
                headers: headers
            })
            .map(res => res.json())
            .catch(this.handleError);
    }

    deleteRecipe(id) {
        return this.http
            .delete('/api/recipe/' + id)
            .map(res => res.json())
            .catch(this.handleError);

    }

    private handleError(error: Response) {
        console.error(error);
        let msg = `Error status code ${error.status} at ${error.url}`;
        console.log(msg);
        return Observable.throw(msg);
    }
}