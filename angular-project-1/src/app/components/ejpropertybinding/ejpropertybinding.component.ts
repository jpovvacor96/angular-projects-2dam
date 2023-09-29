import { Component } from '@angular/core';

@Component({
  selector: 'app-ejpropertybinding',
  templateUrl: './ejpropertybinding.component.html',
  styleUrls: ['./ejpropertybinding.component.css']
})
/**
 * Componente que establece una entrada de texto, cuyo placeholder cambiará cuando pase
 * un tiempo determinado
 */
export class EjpropertybindingComponent {

  /**Texto inicial que se mostrará al usuario*/
  texto:String='Escribe algo...';

  /**Tiempo límite a partir del cual el mensaje cambia*/
  tiempo:number=3000;

  constructor(){
    setTimeout(()=>{
      console.info(`Establecido el tiempo límite en ${this.tiempo} milisegundos`)
      this.texto='Por favor'
      console.warn("Modificación del placeholder")
    }, this.tiempo
    )
  }

}
