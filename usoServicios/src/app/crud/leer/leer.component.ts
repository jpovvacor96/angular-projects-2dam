import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-leer',
  templateUrl: './leer.component.html',
  styleUrls: ['./leer.component.css']
})
export class LeerComponent implements OnInit{

  personas!:Persona[];

  constructor(private servicioService:ServicioService){

  }

  leerTodo(){
    this.servicioService.leerTodo().subscribe(
      result=>this.personas=result
    )
  }

  borrarUno(id:number){
    if(confirm("¿Desea realmente eliminar el contacto?")){
      this.servicioService.borrarUno(id).subscribe(
        (datos:any) => {
          if(datos){
            alert("Contacto eliminado")
            this.leerTodo()
          }
        }
      )
    }
  }

  ngOnInit(): void {
    this.leerTodo();
  }

}
