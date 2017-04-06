import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  links = [
    'Welcome',
    'Project',
    'Contributions',
    'Contact'
  ]

  showInfo(link: string){
    console.log(link);
  }

}
