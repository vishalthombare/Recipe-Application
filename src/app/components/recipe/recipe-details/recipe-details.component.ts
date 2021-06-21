import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/assets/app/recipes/recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipe:any;
  constructor() { }

  ngOnInit(): void {
  }

}
