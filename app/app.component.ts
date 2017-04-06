import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedMenu = '';

  links = [
    'Welcome',
    'Project',
    'Contributions',
    'Contact'
  ]

  showInfo(link: string){
    this.selectedMenu = link;
    console.log(this.selectedMenu);
  }

}
