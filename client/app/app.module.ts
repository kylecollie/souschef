import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { RecipesComponent } from './components/recipes/recipes.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, RecipesComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
