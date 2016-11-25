import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { RecipesComponent } from './components/recipes/recipes.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, RecipesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
