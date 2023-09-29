import { Component } from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css']
})

/**
 * Obtiene la fecha actual
 */
export class CopyrightComponent {
  hoy:any=new Date()
}
