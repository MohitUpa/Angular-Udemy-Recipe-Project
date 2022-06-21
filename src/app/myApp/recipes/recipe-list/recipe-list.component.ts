import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {

  // @Output() public recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] | undefined;

  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipe();
  }


}
