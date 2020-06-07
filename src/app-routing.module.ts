import { NgModule, Component } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./app/recipes/recipes.component";
import { ShoppingListComponent } from "./app/shopping-list/shopping-list.component";

import { RecipeDetailComponent } from "./app/recipes/recipe-detail/recipe-detail.component";


const appRoutes : Routes = [

  {path : '', component : RecipesComponent},
  {path : '',redirectTo : '/start', pathMatch : 'full'},

  {path : 'news' , component : RecipesComponent,children : [
    {path : ':id', component : RecipeDetailComponent},

  ]
   },

  {path : 'contact', component : ShoppingListComponent}
]

@NgModule({

  imports : [RouterModule.forRoot(appRoutes)],
  exports : [RouterModule]

})

export class AppRoutingModule{

}
