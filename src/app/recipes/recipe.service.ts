import { Injectable,EventEmitter} from '@angular/core'
import { News } from './recipe.model';
import { newsDetails } from '../shared/newsDetails.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable({
    providedIn : 'root'
})

export class RecipeServices{
 recipeSelected = new EventEmitter<News>()

 constructor(private sListService : ShoppingListService){}

 private news: News[] = [
    new News('Business Process Management',
     'Businesses, is your Centre of Excellence',
      'assets/image/bpm-blog.jpg',
      [
        new newsDetails(`
        Interestingly for the past one month we have been dealing with businesses who are coming to us because they are unhappy with their current multi-vendor setup in BPM technology and do not quite see how to clean up this entangled mess. Surprisingly, our customers also tell us that they have a BPM CoE.
        Now when this problem statement comes, we wonder how excellent then is the Centre of Excellence?
        The CoE has to keep the entire enterprise platform , architecture and the applications in good shape so that the businesses take the benefit of the technology, isn’t it? If that doesn’t happen, then how good is the CoEs.
        `),

      ]
      ),
    new News('Centre of Excellence',
    'Businesses, is your, still excellent?',
     'assets/image/BPM-Centre-Of-Excellence-1.jpg',
     [
       new newsDetails(`
       Now when this problem statement comes, we wonder how excellent then is the Centre of Excellence?
       The CoE has to keep the entire enterprise platform , architecture and the applications in good shape
        so that the businesses take the benefit of the technology, isn’t it? If that doesn’t happen, then how good is the CoEs.
       Are your architects building reusable UI components or reusable business components? Which one defines a more matured
       CoE? Have you been tracking the reusability score of these components?
                 `)

     ]
     ),

     new News('Process Management Technology',
     'Process Management Technology',
      'assets/image/bpm-bog1.jpg',
      [
        new newsDetails(`
        To be able to suggest a technology solution for the automation of your core business process,
        it is essential that your technology partner is as much aware of your business process as much as the technology.
        Talk about any of the leading BPM solution products in the market, Pega, Appian etc the products themselves guide
        and dictate the solution building path along the core business process and your customer journey.
        The very terminologies these products use are business oriented and not technology oriented.
                  `)

      ]
      ),
      new News('Pega Framework Implementations',
      'Pega Framework Implementations',
       'assets/image/Pega.jpg',
       [
         new newsDetails(`
         Businesses who have chosen to use a Pega Framework for automating their core business, this article is helpful for you.
         When a business buys a framework, the “as is” situation would be, in general, as below (all or any of the below will be applicable)
         Pega Frameworks are robust, quick to adapt and can be put into production in timelines as short as even 3-5 months for a complex of the processes.
                   `)

       ]
       ),

       new News('Blockchain 2019',
       'Blockchain 2019',
        'assets/image/blockchain.jpg',
        [
          new newsDetails(`
          We are proud to announce that as a establish blockchain development company BlueRose technologies is associate sponsorer of the blockchain event.
          Over 100 industry leaders, business decision makers, tech innovators, and the investor will be attending the event. Expand your knowledge of the latest
          business models and strategies in the high-level conference.
                    `)

        ]
        )
  ];

    getRecipe(){
      return this.news.slice();
    }

    getRecipeById(index : number){
       return this.news[index];
    }

    addIngredientToShoppingList(ingredients : newsDetails[]){
          this.sListService.addIngredients(ingredients)
    }
}


