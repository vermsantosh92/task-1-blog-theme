import { Component, OnInit,  } from '@angular/core';

import { News } from '../news.model';
import { RecipeServices } from '../news.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './shopping-detail.component.html',
  styleUrls: ['./shopping-detail.component.css']
})
export class ShoppingDetailComponent implements OnInit {
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
