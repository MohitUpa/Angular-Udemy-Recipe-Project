import { Component, Input, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Recipe } from '../../recipe.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe!: Recipe;
  // @Output() recipeSelected = new EventEmitter<void>();
  @Input() index!:number;
  


  ngOnInit(): void {
  // console.log(this.recipe);
  }
  
}
