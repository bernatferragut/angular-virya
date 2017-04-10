import { Component } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-contributions',
  templateUrl: './contributions.component.html',
  styleUrls: ['./contributions.component.css']
})
export class ContributionsComponent {

  importedObject={};

  constructor(private http: Http) { 

    this.http.get('./app/contributions/data.json')
      .map(response => response.json().contributions)
      .subscribe(res => this.importedObject = res);
     // console.log(this.importedObject);
     
  }

}
