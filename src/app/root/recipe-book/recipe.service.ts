import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../../shared/ingredient-model';

@Injectable({providedIn: 'root'})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [ 
      new Recipe("Test Recipe", "A sample recipe...", 
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSaf2i8GUIEanjVCyWnYi5mYSMuxkXsDvcn_YH-TzmZkdTtSvm_&usqp=CAU",
      [new Ingredient("flour", 3), new Ingredient("water", 2), new Ingredient("butter", 1)]),
      new Recipe("Some Other Test Recipe", "This recipe was created to ensure that different recipes could be selected.",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBgHK8f0HHTeORBCdRjYtMJUvu3_Ft5tDWOtYRbEbPR9soOwg0&usqp=CAU",
      [new Ingredient("potatoes", 4), new Ingredient("cheese", 2)])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}