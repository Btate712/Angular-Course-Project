import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../../shared/ingredient-model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @Output() newListItem: EventEmitter<Ingredient> = new EventEmitter();
  item: string = "";
  amount: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  addItem() {
    const amount = parseInt(this.amount);
    if (this.item !== "" && amount) {
      this.newListItem.emit(new Ingredient(this.item, amount));
      this.item = "";
      this.amount = "";
    }
  }
}
