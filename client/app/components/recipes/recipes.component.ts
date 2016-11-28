import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../../Recipe';

@Component({
    moduleId: module.id,
    selector: 'recipes',
    templateUrl: 'recipes.component.html'
})

export class RecipesComponent {
    recipes: Recipe[];

    constructor(private recipeService: RecipeService) {
        this.recipeService.getRecipes()
            .subscribe(recipes => {
                this.recipes = recipes;
                console.log(recipes);
            });
    }
}
