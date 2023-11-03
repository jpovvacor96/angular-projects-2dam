import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarComponent } from './pages/consultar/consultar.component';
import { CrearComponent } from './pages/crear/crear.component';

const routes: Routes = [
  {
    path: 'consultar',
    component: ConsultarComponent
  },
  {
    path: 'crear',
    component: CrearComponent,
  },
  {
    path: '**',
    redirectTo: 'consultar'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudesRoutingModule { }
