import { Component, OnInit,  } from '@angular/core';

import { News } from '../recipe.model';
import { RecipeServices } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
recipe: News;
id : number;

  constructor( private rService : RecipeServices, private route : ActivatedRoute, private router : Router ) { }

  ngOnInit() {

      this.route.params.subscribe((params : Params)=>{
      this.id = +params['id']
      this.recipe = this.rService.getRecipeById(this.id)
      })
  }

  onAddToShoppingList(){
       this.rService.addIngredientToShoppingList(this.recipe.news)
  }

  onEditRecipe(){
        this.router.navigate(['edit'], {relativeTo : this.route})
  }
}
