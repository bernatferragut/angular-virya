import { Component } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent  {

  importedObject={};

  constructor(private http: Http) { 

    this.http.get('./app/project/data.json')
      .map(response => response.json().project)
      .subscribe(res => this.importedObject = res);
     // console.log(this.importedObject);
     
  }
}


