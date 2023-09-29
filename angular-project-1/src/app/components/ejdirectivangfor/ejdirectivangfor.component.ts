import { Component } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-ejdirectivangfor',
  templateUrl: './ejdirectivangfor.component.html',
  styleUrls: ['./ejdirectivangfor.component.css']
})
export class EjdirectivangforComponent {
  cursos:string[];

  constructor(){
    this.cursos=['Angular', 'HTML', 'CSS', 'Docker', 'Typescript'];
  }

  public alumnos:Array<Alumno>=[
    {id:1, nombre:'Juan', apellidos:'Gutiérrez', ciudad:'Madrid'},
    {id:2, nombre:'Pedro', apellidos:'López', ciudad:'Sevilla'},
    {id:3, nombre:'Alba', apellidos:'Durán', ciudad:'Córdoba'},
    {id:4, nombre:'Carmen', apellidos:'López', ciudad:'Cádiz'}
  ]
}
