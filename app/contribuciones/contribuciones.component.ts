import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-contribuciones',
  templateUrl: './contribuciones.component.html',
  styleUrls: ['./contribuciones.component.css']
})
export class ContribucionesComponent {

  importedObject={};

  constructor(private http: Http) { 

    this.http.get('./app/contribuciones/data.json')
      .map(response => response.json().contribuciones)
      .subscribe(res => this.importedObject = res);
     // console.log(this.importedObject);
     
  }

  onSubmit(f: NgForm){
    console.log("submitted!");
    console.log(f);
  }

}
