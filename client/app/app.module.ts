import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import './core/rxjs-extensions';

import { SouschefComponent } from './souschef.component';
import { AppRoutingModule, routableComponents } from './app-routing.module';
import { IngredientComponent } from './components/recipes/ingredient.component';
import { InstructionComponent } from './components/recipes/instruction.component';
import { TagComponent } from './components/recipes/tag.component';
import { StarComponent } from './core/stars/star.component';
import { RecipeService } from './recipes/shared/recipe.service';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule , 
    HttpModule,
    ],
  declarations: [
    SouschefComponent,
    routableComponents,
    IngredientComponent,
    InstructionComponent,
    TagComponent,
    StarComponent   
  ],
  providers: [RecipeService],
  bootstrap: [SouschefComponent]
})

export class AppModule { }
