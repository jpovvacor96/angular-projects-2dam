import { Component } from '@angular/core';

@Component({
  selector: 'app-ejmetodo',
  templateUrl: './ejmetodo.component.html',
  styleUrls: ['./ejmetodo.component.css']
})
export class EjmetodoComponent {

  puntuacion:number=9;

  puntuacionMaxima:number=10;

  getPuntuacion(){
    return this.puntuacion;
  }

  getPuntuacionMaxima(){
    return this.puntuacionMaxima;
  }

}
