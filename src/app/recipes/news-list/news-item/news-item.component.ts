import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { News } from '../../news.model';
import { RecipeServices } from '../../news.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  @Input() recipe: News;
  @Input() index : number

  ngOnInit() {
  }



}
