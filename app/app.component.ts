import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedMenu = '';
  activado = false;
  english = false;
  links = ['Welcome','Project','Contribute','Contact']

  langChange(){
    this.english = true;
  }

  showInfo(link: string){
    this.selectedMenu = link;
    console.log(this.selectedMenu + this.activado);
  }



}

// Include the double language doing the following:
// EN / ES bool var activate when 
// On showInfo activate bollean EN/Es to true/false and choose a linke
// maybe pass a 'link' + lang as parameter and choose later depending...
