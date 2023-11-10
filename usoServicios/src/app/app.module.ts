import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeerComponent } from './crud/leer/leer.component';
import {HttpClientModule} from '@angular/common/http';
import { CrearComponent } from './crud/crear/crear.component';
import { FormsModule } from '@angular/forms';
import { ActualizarComponent } from './crud/actualizar/actualizar.component';

@NgModule({
  declarations: [
    AppComponent,
    LeerComponent,
    CrearComponent,
    ActualizarComponent
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
