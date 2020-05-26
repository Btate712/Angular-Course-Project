import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient-model';

@Injectable({providedIn: 'root'})
export class ShoppingListService {
  ingredients:Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 4)
  ];

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addListItem(item: Ingredient) {
    this.ingredients.push(item);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}