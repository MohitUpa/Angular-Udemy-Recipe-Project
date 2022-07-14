import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderMyAppComponent} from './myApp/header/header.component';
import { RecipesComponent } from './myApp/recipes/recipes.component';
import { RecipeListComponent } from './myApp/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './myApp/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './myApp/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './myApp/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './myApp/shopping-list/shopping-edit/shopping-edit.component';
import { MyAppComponent } from './myApp/my-app.component';
import { DropdownDirective } from './myApp/shared/dropdown.directive';
import { ShoppingListService } from './myApp/shopping-list/shopping-list.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecipeStartComponent } from './myApp/recipes/recipe-start/recipe-start.component';
import { RecipesEditComponent } from './myApp/recipes/recipes-edit/recipes-edit.component';
import { RecipeService } from './myApp/recipes/recipe.service';
@NgModule({
  declarations: [
    RecipesEditComponent,
    AppComponent,
    HeaderMyAppComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    MyAppComponent,
    DropdownDirective,
    RecipeStartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    RecipeItemComponent
  ],
  providers: [ShoppingListService,
   RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
