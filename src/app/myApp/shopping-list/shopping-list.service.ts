import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 50),
        new Ingredient('Tomatos', 30),
        new Ingredient('Carrot', 10),
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient:Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients:Ingredient[]) {
        // for(let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());

    }
}