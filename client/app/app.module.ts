import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { IngredientComponent } from './components/recipes/ingredient.component';
import { InstructionComponent } from './components/recipes/instruction.component';
import { TagComponent } from './components/recipes/tag.component';
import { RecipeFormComponent } from './components/recipes/recipeForm.component';


@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule , HttpModule],
  declarations: [
    AppComponent, 
    RecipesComponent, 
    RecipeFormComponent,
    IngredientComponent,
    InstructionComponent,
    TagComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
