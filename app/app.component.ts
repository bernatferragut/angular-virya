import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

selected = false;
itemSelected: string;
hasBeenSelected = new EventEmitter();

onSelected(feature: string){
  this.selected = true;
  this.itemSelected = feature;
  console.log(this.selected);
}

}
