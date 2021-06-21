import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/assets/app/recipes/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  selectedRecipe:Recipe;
  constructor() { }

  ngOnInit(): void {
  }

}
