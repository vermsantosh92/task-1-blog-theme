import { Injectable,EventEmitter,Output } from "@angular/core";
import { newsDetails } from "../shared/newsDetails.model";


@Injectable({
    providedIn : 'root'
})

export class ShoppingListService{
   @Output() ingredientChanges = new EventEmitter<newsDetails[]>()
  private news: newsDetails[] = [
    new newsDetails('Apples'),
    new newsDetails('Tomatoes'),
  ];


    getNews(){
        return this.news
    }

    onAddNews(ingredient : newsDetails){
          this.news.push(ingredient);
          this.ingredientChanges.emit(this.news.slice())

    }

     addIngredients(ingredients : newsDetails[]){
       this.news.push(...ingredients);
       this.ingredientChanges.emit(this.news.slice())
     }
}
