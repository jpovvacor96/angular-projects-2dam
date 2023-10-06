import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { AddproveedorComponent } from './proveedores/addproveedor/addproveedor.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"proveedores", component:ProveedoresComponent},
  {path:"addproveedor", component:AddproveedorComponent},
  {path:"", redirectTo:"home", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
