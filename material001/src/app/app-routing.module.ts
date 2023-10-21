import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pais1Component } from './paises/pais1/pais1.component';
import { Pais2Component } from './paises/pais2/pais2.component';
import { Pais3Component } from './paises/pais3/pais3.component';
import { ButtonsComponent } from './components/buttons/buttons.component';

const routes: Routes = [
  {path:"pais1", component: Pais1Component},
  {path:"pais2", component: Pais2Component},
  {path:"pais3", component:Pais3Component},
  {path:"botones", component: ButtonsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
