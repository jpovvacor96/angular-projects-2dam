import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {

  persona!:Persona;

  tipos: String[]=['Amigos', 'Familia', 'Trabajo'];

  constructor(private servicioService: ServicioService, private router:Router){
    this.persona={
      id:0,
      nombre:'',
      telefono:'',
      email:'',
      tipo:''
    }
  }

  crearUno(){
    this.servicioService.crearUno(this.persona).subscribe((datos:any)=>{
      if(datos){
        alert('Nuevo contacto insertado');
        this.router.navigate(["/leer"])
      }
      else{
        alert('Error en el registro del nuevo contacto')
      }
    })
    
  }

}
