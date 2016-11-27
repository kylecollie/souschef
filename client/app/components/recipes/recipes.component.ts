import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';

@Component({
    moduleId: module.id,
    selector: 'recipes',
    templateUrl: 'recipes.component.html'
})

export class RecipesComponent {
    constructor(private recipeService: RecipeService) {
    }
    Recipe = {};


    //     public Recipe = {
    //         "_id": "5837315303ac7fb6a44da448",
    //         "title": "Smores",
    //         "description": "Yummy chocolate covered marshmello treats",
    //         "ingredients": [
    //             {
    //                 "name": "grahm cracker",
    //                 "quantity": "2"
    //             },
    //             {
    //                 "name": "chocolate square",
    //                 "quantity": "1"
    //             },
    //             {
    //                 "name": "marshmellow",
    //                 "quantity": "1"
    //             }
    //         ],
    //         "instructions": [
    //             {
    //                 "order": 1,
    //                 "direction": "place chocolate square on cracker"
    //             },
    //             {
    //                 "order": 2,
    //                 "direction": "toast marshmellow"
    //             },
    //             {
    //                 "order": 3,
    //                 "direction": "place marshmellow on chocolate"
    //             },
    //             {
    //                 "order": 4,
    //                 "direction": "place cracker on top"
    //             },
    //             {
    //                 "order": 5,
    //                 "direction": "place cracker on top"
    //             }
    //         ],
    //         "tags": [
    //             "chocolate",
    //             "marshmellow",
    //             "grahm cracker",
    //             "campfire",
    //             "treat"
    //         ]
    //     }
}
