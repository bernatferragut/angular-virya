import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  importedObject={};

  constructor(private http: Http) { 

    this.http.get('./app/contacto/data.json')
      .map(response => response.json().contacto)
      .subscribe(res => this.importedObject = res);
     // console.log(this.importedObject);
     
  }

}
