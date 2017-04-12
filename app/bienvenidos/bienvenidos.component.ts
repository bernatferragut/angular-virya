import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-bienvenidos',
  templateUrl: './bienvenidos.component.html',
  styleUrls: ['./bienvenidos.component.css']
})
export class BienvenidosComponent {

   importedObject={};

  constructor(private http: Http,) { 
    this.http.get('./app/bienvenidos/data.json')
      .map(response => response.json().bienvenido)
      .subscribe(res => this.importedObject = res);
  }

}
