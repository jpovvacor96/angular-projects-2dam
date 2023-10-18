import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { AddproveedorComponent } from './proveedores/addproveedor/addproveedor.component';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { AddpresupuestoComponent } from './presupuestos/addpresupuesto/addpresupuesto.component';
import { ModproveedorComponent } from './proveedores/modproveedor/modproveedor.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"proveedores", component:ProveedoresComponent},
  {path:"addproveedor", component:AddproveedorComponent},
  {path:"presupuestos", component:PresupuestosComponent},
  {path:"addpresupuesto", component:AddpresupuestoComponent},
  {path:"modproveedor/:id", component:ModproveedorComponent},
  {path:"", redirectTo:"home", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
