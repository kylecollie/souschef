import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipe-list/recipes.component';
import { RecipeComponent } from './components/recipes/recipe.component';
import { AboutComponent } from './about/about.component';
import { RecipeFormComponent } from './components/recipes/recipeForm.component';
import { PageNotFoundComponent } from './core/404/pageNotFound.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'recipe/:id', component: RecipeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'addRecipe', component: RecipeFormComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },  
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

export const routableComponents = [
      HomeComponent,
      RecipesComponent,
      RecipeComponent,
      AboutComponent,
      RecipeFormComponent,
      PageNotFoundComponent
    ];