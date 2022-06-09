import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMyAppComponent } from './myApp/header/header.component';

import { RecipeDetailComponent } from './myApp/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './myApp/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './myApp/recipes/recipe-list/recipe-list.component';
import { RecipesComponent } from './myApp/recipes/recipes.component';

import { ShoppingEditComponent } from './myApp/shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './myApp/shopping-list/shopping-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderMyAppComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    RecipeListComponent,
    ShoppingEditComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
