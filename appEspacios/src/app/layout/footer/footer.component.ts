import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  //##################
  //LISTA DE ATRIBUTOS
  //##################

  /**Fecha y hora actual*/
  hoy: any = new Date();

  /**Impresión de la licencia*/
  copyright: String = '© Todos los derechos reservados';

  //#############
  //CONSTRUCTORES
  //#############

  /**
   * Determina el comportamiento del programa al iniciarse
   */
  constructor() {
    setInterval(() => {
      this.mueveReloj();
    }, 1000)
  }

  //###################
  //MÉTODOS Y FUNCIONES
  //###################

  /**
   * Devuelve la fecha y la hora actual
   * @returns Fecha y hora actual
   */
  mueveReloj() {
    const momentoActual = new Date();
    return momentoActual;
  }
}
