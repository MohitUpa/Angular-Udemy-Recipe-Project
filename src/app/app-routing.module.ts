import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from './myApp/recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './myApp/recipes/recipe-start/recipe-start.component';
import { RecipesEditComponent } from './myApp/recipes/recipes-edit/recipes-edit.component';
import { RecipesResolverService } from './myApp/recipes/recipes-resolver.service';
import { RecipesComponent } from './myApp/recipes/recipes.component';
import { ShoppingListComponent } from './myApp/shopping-list/shopping-list.component';

const appRoutes: Routes = [
  {path:'',redirectTo:'/recipes', pathMatch:'full'},
  {path:'recipes', component: RecipesComponent, children: [
    {path:'',component: RecipeStartComponent},
    {path:'new',component: RecipesEditComponent},
    {path:':id',component: RecipeDetailComponent, resolve: [RecipesResolverService]},
    {path:':id/edit',component: RecipesEditComponent, resolve: [RecipesResolverService]}
  ]},
  {path:'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
