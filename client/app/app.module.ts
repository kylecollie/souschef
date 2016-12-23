import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { IngredientComponent } from './components/recipes/ingredient.component';
import { InstructionComponent } from './components/recipes/instruction.component';
import { TagComponent } from './components/recipes/tag.component';
import { RecipeFormComponent } from './components/recipes/recipeForm.component';
import { AboutComponent } from './components/misc/about.component';
import { HomeComponent } from './components/misc/home.component';
import { RecipeComponent } from './components/recipes/recipe.component';
import { StarComponent } from './components/misc/star.component';


@NgModule({
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule , 
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'addRecipe',
        component: RecipeFormComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'recipes',
        component: RecipesComponent
      },
      {
        path: 'recipe/:id',
        component: RecipeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      }
    ])
    ],
  declarations: [
    AppComponent, 
    RecipesComponent, 
    RecipeFormComponent,
    IngredientComponent,
    InstructionComponent,
    TagComponent,
    AboutComponent,
    HomeComponent,
    RecipeComponent ,
    StarComponent   
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
