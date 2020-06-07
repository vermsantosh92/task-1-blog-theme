import { Component, OnInit } from '@angular/core';

import { News } from './recipe.model';
import { RecipeServices } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: News;

  constructor(private recipeService : RecipeServices ) { }

  ngOnInit() {

      this.recipeService.recipeSelected.subscribe(
        (recipe:News)=>{
            this.selectedRecipe = recipe
        }
      );
  }

}
