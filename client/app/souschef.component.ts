// souschef.component.ts

import { Component } from '@angular/core';
import { RecipeService } from './services/recipe.service';

@Component({
  moduleId: module.id,
  selector: 'sc-app',
  templateUrl: 'souschef.component.html',
  styleUrls: ['souschef.component.css'],
  providers: [RecipeService]
})

export class SouschefComponent  {  }
