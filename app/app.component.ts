import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedMenu = '';
  activado = false;

  links = [
    'Welcome',
    'Project',
    'Contribute',
    'Contact'
  ]

  showInfo(link: string){
    this.selectedMenu = link;
    this.activado = !this.activado;
    console.log(this.selectedMenu + this.activado);
    //return this.selectedMenu;
  }

}
