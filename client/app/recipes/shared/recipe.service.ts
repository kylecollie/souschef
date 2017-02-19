// recipe.service.ts

import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { Recipe } from '../../models/Recipe';
import { IRecipe } from '../../models/IRecipe';

@Injectable()
export class RecipeService {
    private baseUrl = '/api/recipes';
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
            .post(this.baseUrl,
            JSON.stringify(newRecipe),
            {
                headers: headers
            })
            .map(res => res.json())
            .catch(this.handleError);
    }

    deleteRecipe(id) {
        return this.http
            .delete('api/recipe/' + id)
            .map(res => res.json())
            .catch(this.handleError);

    }

    saveRecipe(recipe: IRecipe): Observable<IRecipe> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        console.log(JSON.stringify(recipe));
        if (!recipe._id) {
            return this.createRecipe(recipe, options);
        }
        return this.updateRecipe(recipe, options);
    }

    private createRecipe(recipe: IRecipe, options: RequestOptions): Observable<IRecipe> {
        recipe._id = undefined;
        return this.http.post('api/recipe/', recipe, options)
            .map(this.extractData)
            .do(data => console.log('createRecipe: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private updateRecipe(recipe: IRecipe, options: RequestOptions): Observable<IRecipe> {
        const url = `${'api/recipe'}/${recipe._id}`;
        console.log(url);
        return this.http.put(url, recipe, options)
            .map(() => recipe)
            .do(data => console.log('updateRecipe: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private extractData(response: Response) {
        let body = response.json();
        return body.data || {};
    }

    private handleError(error: Response) {
        console.error(error);
        let msg = `Error status code ${error.status} at ${error.url}`;
        console.log(msg);
        return Observable.throw(msg);
    }
}