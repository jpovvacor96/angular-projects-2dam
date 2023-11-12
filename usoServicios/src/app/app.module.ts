import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeerComponent } from './crud/leer/leer.component';
import {HttpClientModule} from '@angular/common/http';
import { CrearComponent } from './crud/crear/crear.component';
import { FormsModule } from '@angular/forms';
import { ActualizarComponent } from './crud/actualizar/actualizar.component';
import { MenuComponent } from './layout/menu/menu.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './layout/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LeerComponent,
    CrearComponent,
    ActualizarComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
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
