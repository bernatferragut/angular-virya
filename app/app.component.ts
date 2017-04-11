import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedMenu = '';
  english = false;
  linksES = ['Bienvenido','Proyecto','Contribuye','Contacto'];
  linksEN = ['Welcome','Project','Contribute','Contact'];

  // langChange(){
  //   this.english = !this.english;
  //   console.log('english:' + this.english);
  // }

  showInfo(link: string){
    if(this.english === false){
      this.selectedMenu = link + 'ES';
      console.log('spanish is true');
    }else{
      this.selectedMenu = link + 'EN';
      console.log('englsih is true');
    }
    console.log(this.selectedMenu);
  }
}

// Include the double language doing the following:
// EN / ES bool var activate when 
// On showInfo activate bollean EN/Es to true/false and choose a linke
// maybe pass a 'link' + lang as parameter and choose later depending...
