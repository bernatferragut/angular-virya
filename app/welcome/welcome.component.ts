import { Component } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  importedObject={};

  constructor(private http: Http) { 

    this.http.get('./app/welcome/data.json')
      .map(response => response.json().welcome)
      .subscribe(res => this.importedObject = res);
     // console.log(this.importedObject);
     
  }
}
