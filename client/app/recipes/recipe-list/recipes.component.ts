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
    errorMessage: string;

    constructor(private recipeService: RecipeService) {
        this.recipeService.getRecipes()
            .subscribe(
                recipes => this.recipes = recipes,
                error => this.errorMessage = <any>error
            );
    }

    deleteRecipe(id) {
        var recipes = this.recipes;

        this.recipeService.deleteRecipe(id).subscribe(data => {
            if (data.n == 1) {
                for (var index = 0; index < recipes.length; index++) {
                    if (recipes[index]._id == id) {
                        recipes.splice(index, 1);
                    }
                }
            }
        });
        
    }
}
