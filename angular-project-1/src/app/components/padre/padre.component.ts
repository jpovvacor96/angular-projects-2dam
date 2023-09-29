import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  valorPadre:string='Este texto se inyecta desde el padre';
  avisos:string[]=['Aviso 1', 'Aviso 2', 'Aviso 3'];
}
