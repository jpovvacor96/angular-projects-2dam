import { Component } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent {

  persona!:Persona;

  tipos: String[]=['Amigos', 'Familia', 'Trabajo'];

  constructor(private servicioService: ServicioService){
    this.persona={
      id:0,
      nombre:'',
      telefono:'',
      email:'',
      tipo:''
    }
  }

  buscarEmail(){
    this.servicioService.buscarEmail(this.persona.email).subscribe(
      result=>this.persona=result[0]
    );
  }

  actualizarUno(id:number){
    this.servicioService.actualizarUno(id, this.persona).subscribe((datos:any)=>{
      if(datos){
        alert('Contacto actualizado')
        window.location.reload();
      }
      else{
        alert('Error en la modificación de datos')
      }
    }
    );
  }

}
