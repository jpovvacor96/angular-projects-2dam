import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeerComponent } from './robot/leer/leer.component';
import { DetalleComponent } from './robot/detalle/detalle.component';
import { ModificarComponent } from './robot/modificar/modificar.component';
import { CrearComponent } from './robot/crear/crear.component';

const routes: Routes = [
  {path:"leer", component: LeerComponent},
  {path:"crear", component:CrearComponent},
  {path:"detalle/:id", component: DetalleComponent},
  {path:"modificar/:id", component: ModificarComponent},
  {path:"", redirectTo:"leer", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
