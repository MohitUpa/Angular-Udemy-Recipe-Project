import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Tacos',
            'Step up your next taco night with our ultimate guide to the best homemade tacos ever.'
            , 'https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/05/homemade-birria-tacos-recipe-3273w.jpg',
            [
                new Ingredient('meat',1),
                new Ingredient('French Fries',20)
            ]),
        new Recipe(
            'Tax Max Cheese Pizza',
            'Step up your next taco night with our ultimate guide to the best',
            'https://www.simplyrecipes.com/thmb/O-rhPnz2V3hdqKFPij8NlwZIKqs=/2376x1584/filters:fill(auto,1)/Simply-Recipes-Quesadilla-LEAD-5-55da42a2a306497c85b1328385e44d85.jpg',
            [
                new Ingredient('buns',2),
                new Ingredient('meat',1)
            ])
    ];

    constructor(private slService:ShoppingListService) {}

    getRecipe() {
        return this.recipes.slice();
    }

    getRecip(index:number) {
        return this.recipes.slice()[index];
    }

    addIngredintsToShoppingList(ingredients:Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}