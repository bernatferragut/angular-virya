import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-contribuciones',
  templateUrl: './contribuciones.component.html',
  styleUrls: ['./contribuciones.component.css']
})
export class ContribucionesComponent {

  constructor(private http: Http) { 
    this.http.get('./app/contribuciones/data.json')
      .map(response => response.json().contribuciones)
      .subscribe(res => this.importedObject = res);
  }

  @ViewChild('f') signupForm: NgForm; // This is a var from the HTML

  importedObject={};

  onSubmit(f: NgForm){
    console.log("submitted!");
    console.log(f);
  }

  // onsubmit(){
  //   console.log(this.signupForm);
  // }


}
