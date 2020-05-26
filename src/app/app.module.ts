import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { HeaderComponent } from './root/header/header.component';
import { ShoppingListComponent } from './root/shopping-list/shopping-list/shopping-list.component';
import { RecipeBookComponent } from './root/recipe-book/recipe-book.component';
import { ShoppingListEditComponent } from './root/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './root/recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './root/recipe-book/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './root/recipe-book/recipe-detail/recipe-detail.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
