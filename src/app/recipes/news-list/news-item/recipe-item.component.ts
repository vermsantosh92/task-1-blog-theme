import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { News } from '../../recipe.model';
import { RecipeServices } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: News;
  @Input() index : number

  ngOnInit() {
  }



}
