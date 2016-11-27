import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipeService {
    constructor(private http:Http){
        console.log('Recipe Service Initialized...');
    }
}