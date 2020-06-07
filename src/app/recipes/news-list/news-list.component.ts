import { Component, OnInit } from '@angular/core';

import { News } from '../recipe.model';
import { RecipeServices } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : News [];


  constructor( private recipeSerice : RecipeServices, private router : Router, private route : ActivatedRoute ) { }

  ngOnInit() {

    this.recipes  = this.recipeSerice.getRecipe()

  }

  onNewRecipe(){
           this.router.navigate(['new'], {relativeTo : this.route})
  }

}
