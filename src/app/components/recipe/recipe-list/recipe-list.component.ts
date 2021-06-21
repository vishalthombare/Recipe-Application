import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/assets/app/recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected=new EventEmitter<Recipe>();
 recipe:Recipe[]=[
   new Recipe("A Test Recipe","This is Simply a test","https://upload.wikimedia.org/wikipedia/commons/f/f5/Vermicelli-upma-recipe.jpg"),
   new Recipe("Another Test Recipe","This is Simply a test","https://upload.wikimedia.org/wikipedia/commons/f/f5/Vermicelli-upma-recipe.jpg")
 ];
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
