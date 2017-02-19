// recipe-detail.component.ts 

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RecipeService } from '../../recipes/shared/recipe.service';
import { Recipe } from '../../models/Recipe';


@Component({
    moduleId: module.id,
    selector: 'recipe',
    templateUrl: 'recipe-detail.component.html'
})

export class RecipeDetailComponent {
    recipe: Recipe;

    constructor(
        private recipeService: RecipeService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        let id = this.route.snapshot.params['id'];
        this.recipeService.getRecipe(id)
            .subscribe(recipe =>
                this.recipe = <Recipe>recipe
            );
    }

    onBack(): void {
        this.router.navigate(['/recipes']);
    }
};