import { Component } from '@angular/core';

@Component({
  selector: 'app-ejeventbinding',
  templateUrl: './ejeventbinding.component.html',
  styleUrls: ['./ejeventbinding.component.css']
})
export class EjeventbindingComponent {
  
  cambiado:boolean=false;
  
  texto:String='Texto original';

  modTexto(){
    if(this.cambiado){
      this.texto='Texto original';
      this.cambiado=false;
    }
    else{
      this.texto='Texto cambiado';
      this.cambiado=true;
    }
    
  }

}
