import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectComponent } from './project/project.component';
import { ContributionsComponent } from './contributions/contributions.component';
import { ContactComponent } from './contact/contact.component';
import { BienvenidosComponent } from './bienvenidos/bienvenidos.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { ContribucionesComponent } from './contribuciones/contribuciones.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ValidationService } from './validation.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProjectComponent,
    ContributionsComponent,
    ContactComponent,
    BienvenidosComponent,
    ProyectoComponent,
    ContribucionesComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [ValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
