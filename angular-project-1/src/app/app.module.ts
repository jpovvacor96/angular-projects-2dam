import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FechaactualComponent } from './components/fechaactual/fechaactual.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { ViewmodeloComponent } from './components/viewmodelo/viewmodelo.component';
import { EjmetodoComponent } from './components/ejmetodo/ejmetodo.component';
import { EjpropertybindingComponent } from './components/ejpropertybinding/ejpropertybinding.component';
import { EjeventbindingComponent } from './components/ejeventbinding/ejeventbinding.component';
import { Ej2waybindingComponent } from './components/ej2waybinding/ej2waybinding.component';
import { FormsModule } from '@angular/forms';
import { EjdirectivangifComponent } from './components/ejdirectivangif/ejdirectivangif.component';
import { EjdirectivangstyleComponent } from './components/ejdirectivangstyle/ejdirectivangstyle.component';
import { EjdirectivangclassComponent } from './components/ejdirectivangclass/ejdirectivangclass.component';
import { EjdirectivangforComponent } from './components/ejdirectivangfor/ejdirectivangfor.component';
import { EjdirectivangswitchComponent } from './components/ejdirectivangswitch/ejdirectivangswitch.component';
import { PadreComponent } from './components/padre/padre.component';
import { HijoComponent } from './components/hijo/hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    FechaactualComponent,
    CopyrightComponent,
    ViewmodeloComponent,
    EjmetodoComponent,
    EjpropertybindingComponent,
    EjeventbindingComponent,
    Ej2waybindingComponent,
    EjdirectivangifComponent,
    EjdirectivangstyleComponent,
    EjdirectivangclassComponent,
    EjdirectivangforComponent,
    EjdirectivangswitchComponent,
    PadreComponent,
    HijoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
