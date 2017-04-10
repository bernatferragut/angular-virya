import { Component } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  importedObject={};

  constructor(private http: Http) { 

    this.http.get('./app/contact/data.json')
      .map(response => response.json().contact)
      .subscribe(res => this.importedObject = res);
     // console.log(this.importedObject);
     
  }

}

// Include the double language doing the following:
// EN / ES bool var activate when 

