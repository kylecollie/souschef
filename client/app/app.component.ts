import { Component } from '@angular/core';
import { RecipeService } from './services/recipe.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`,
  providers: [RecipeService]
})

export class AppComponent  {  }
