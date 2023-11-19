import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeerComponent } from './robot/leer/leer.component';
import { CrearComponent } from './robot/crear/crear.component';
import { DetalleComponent } from './robot/detalle/detalle.component';
import { ModificarComponent } from './robot/modificar/modificar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LeerComponent,
    CrearComponent,
    DetalleComponent,
    ModificarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
