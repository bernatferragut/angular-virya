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

  @ViewChild('f') signupForm: NgForm; // var to fetch the NgForm Data

  importedObject={};
  submitted = false;

  // Object to collect the input data
  formData = {
    name: '',
    surname: '',
    email: '',
    city:'',
    state: '',
    postalcode:''
  }

  onSubmit(){
    this.submitted = true;

    this.formData.name = this.signupForm.value.name;
    this.formData.surname = this.signupForm.value.surname;
    this.formData.email = this.signupForm.value.email;
    this.formData.city = this.signupForm.value.city;
    this.formData.state = this.signupForm.value.state;
    this.formData.postalcode = this.signupForm.value.postalcode;

    this.signupForm.reset();
  }
}
