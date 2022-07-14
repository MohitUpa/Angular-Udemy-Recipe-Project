import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({
    providedIn: 'root',
})
export class DataStorageService {
    constructor(private http: HttpClient, private recipesService: RecipeService) { }

    storeRecipe() {
        const recipe = this.recipesService.getRecipe();
        this.http.put<any>('https://ng-recipe-book-ba05e-default-rtdb.firebaseio.com/recipe.json', recipe)
            .subscribe(response => {
                console.log(response);
            });
    }

    fatchRecipe() {
        return this.http.get<Recipe[]>('https://ng-recipe-book-ba05e-default-rtdb.firebaseio.com/recipe.json')
            .pipe(
                map(recipes => {
                    return recipes.map((recipe: any) => {
                        return {
                            ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []
                        }
                    })
                }),
                tap(recipes => {
                    this.recipesService.setRecipes(recipes);
                })
            )
    }
}