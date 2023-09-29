import { Component } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-viewmodelo',
  templateUrl: './viewmodelo.component.html',
  styleUrls: ['./viewmodelo.component.css']
})
export class ViewmodeloComponent {
  alumno1=new Alumno(1, "José", "Palomino Ochoa","Villanueva de Córdoba");
  alumno2=new Alumno(2, "Adolfo", "Rodríguez Sánchez","Sevilla");
  alumno3=new Alumno(3, "Jesús", "García Mendoza","Cádiz");
}
