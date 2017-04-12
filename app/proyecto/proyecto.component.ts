import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent {

  importedObject={};

  constructor(private http: Http) { 

    this.http.get('./app/proyecto/data.json')
      .map(response => response.json().proyecto)
      .subscribe(res => this.importedObject = res);
     // console.log(this.importedObject);
     
  }

}
