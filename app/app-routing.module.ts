import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidosComponent } from "app/bienvenidos/bienvenidos.component";
import { ProyectoComponent } from "app/proyecto/proyecto.component";
import { ContribucionesComponent } from "app/contribuciones/contribuciones.component";
import { ContactoComponent } from "app/contacto/contacto.component";

const appRoutes: Routes = [ 
    { path: '', redirectTo: '/bienvenidos', pathMatch:'full'},
    { path: 'bienvenidos', component: BienvenidosComponent },
    { path: 'proyecto', component: ProyectoComponent },
    { path: 'contribuciones', component: ContribucionesComponent },
    { path: 'contacto', component: ContactoComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}