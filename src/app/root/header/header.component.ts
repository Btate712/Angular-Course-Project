import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed:boolean  = true;
  @Output('tabChoice') tabChoiceEmitter = new EventEmitter<string>();

  // default tab is recipes
  showTab = 'recipes';
  
  constructor() { }

  selectTab(choice) {
    this.showTab = choice;
    this.tabChoiceEmitter.emit(choice);
  }

  ngOnInit(): void {
  }

}
