import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedMenu = '';
  english = false;
  links = ['Welcome','Project','Contribute','Contact']

  // langChange(){
  //   this.english = !this.english;
  //   console.log('english:' + this.english);
  // }

  showInfo(link: string){
    if(this.english === false){
      this.selectedMenu = link + 'es';
      console.log(this.english);
    }else{
      this.selectedMenu = link + 'en';
      console.log(this.english);
    }
    console.log(this.selectedMenu);
  }
}

// Include the double language doing the following:
// EN / ES bool var activate when 
// On showInfo activate bollean EN/Es to true/false and choose a linke
// maybe pass a 'link' + lang as parameter and choose later depending...
