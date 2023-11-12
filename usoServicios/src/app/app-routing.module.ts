import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { LeerComponent } from './crud/leer/leer.component';
import { CrearComponent } from './crud/crear/crear.component';
import { ActualizarComponent } from './crud/actualizar/actualizar.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"leer", component:LeerComponent},
  {path:"crear", component:CrearComponent},
  {path:"actualizar/:id", component:ActualizarComponent},
  {path:"", redirectTo:"home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
