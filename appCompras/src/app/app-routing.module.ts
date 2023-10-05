import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"proveedores", component:ProveedoresComponent},
  {path:"", redirectTo:"home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
