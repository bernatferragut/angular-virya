import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedMenu = '';
  english = false;
  linksES = ['Bienvenidos','Proyecto','Contribuye','Contacto'];
  linksEN = ['Welcome','Project','Contribute','Contact'];

  showInfo(link: string){
    this.selectedMenu = link;
    console.log(this.selectedMenu);
  }
}
