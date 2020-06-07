import { Component, OnInit } from '@angular/core';

import { newsDetails } from '../shared/newsDetails.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  news: newsDetails[];

  constructor( private shoppingListserice : ShoppingListService ) { }

  ngOnInit() {

    this.news = this.shoppingListserice.getNews()
    this.shoppingListserice.ingredientChanges.subscribe((ing: newsDetails[])=>{
            this.news = ing
    })
  }


}
