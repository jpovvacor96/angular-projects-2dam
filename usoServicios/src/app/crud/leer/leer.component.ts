import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-leer',
  templateUrl: './leer.component.html',
  styleUrls: ['./leer.component.css']
})
export class LeerComponent implements OnInit{

  personas!:Persona[];

  constructor(private servicioService:ServicioService, private router: Router){

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

  abrirFormActualizar(id:number){
    this.router.navigate(['actualizar', id])
  }

  ngOnInit(): void {
    this.leerTodo();
  }

}
