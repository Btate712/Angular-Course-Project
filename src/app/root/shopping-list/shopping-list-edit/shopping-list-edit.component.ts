import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../../shared/ingredient-model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  item: string = "";
  amount: string = "";

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addItem() {
    const amount = parseInt(this.amount);
    if (this.item !== "" && amount) {
      this.shoppingListService.addListItem(new Ingredient(this.item, amount));
      this.item = "";
      this.amount = "";
    }
  }
}
