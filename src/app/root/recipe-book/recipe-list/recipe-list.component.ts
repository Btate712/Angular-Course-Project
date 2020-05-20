import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe("Test Recipe", "A sample recipe...", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSaf2i8GUIEanjVCyWnYi5mYSMuxkXsDvcn_YH-TzmZkdTtSvm_&usqp=CAU")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
