import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipeService {
    constructor(private http: Http) {
        console.log('Recipe Service Initialized...');
    }

    getRecipes() {
        return this.http.get('http://localhost:3000/api/recipes')
            .map(res => res.json());
    }

    addRecipe(newRecipe) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/recipe',
            JSON.stringify(newRecipe),
            {
                headers: headers
            }).map(res => res.json());
    }
}