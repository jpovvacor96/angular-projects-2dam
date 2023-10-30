import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspaciosRoutingModule } from './espacios-routing.module';
import { ConsultarComponent } from './pages/consultar/consultar.component';
import { CrearComponent } from './pages/crear/crear.component';
import { ActualizarComponent } from './pages/actualizar/actualizar.component';
import { EliminarComponent } from './pages/eliminar/eliminar.component';


@NgModule({
  declarations: [
    ConsultarComponent,
    CrearComponent,
    ActualizarComponent,
    EliminarComponent
  ],
  imports: [
    CommonModule,
    EspaciosRoutingModule
  ]
})
export class EspaciosModule { }
