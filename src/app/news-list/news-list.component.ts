import { Component, OnInit } from '@angular/core';

import { newsDetails } from '../shared/news.model';
import { NewsListService } from './news-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  news: newsDetails[];

  constructor( private shoppingListserice : NewsListService ) { }

  ngOnInit() {

    this.news = this.shoppingListserice.getNews()
    this.shoppingListserice.ingredientChanges.subscribe((ing: newsDetails[])=>{
            this.news = ing
    })
  }


}
