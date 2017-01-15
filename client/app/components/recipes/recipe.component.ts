// recipe.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RecipeService } from '../../recipes/shared/recipe.service';
import { Recipe } from '../../models/Recipe';


@Component({
    moduleId: module.id,
    selector: 'recipe',
    templateUrl: 'recipe.component.html'
})

export class RecipeComponent {
    recipe: Recipe;

    constructor(
        private recipeService: RecipeService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        let id = this.route.snapshot.params['id'];
        this.recipeService.getRecipe(id)
            .subscribe(recipe =>
                this.recipe = recipe
            );
    }
};