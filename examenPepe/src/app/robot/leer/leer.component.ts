import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Robot } from 'src/app/models/robot';
import { RobotServiceService } from 'src/app/services/robot-service.service';

@Component({
  selector: 'app-leer',
  templateUrl: './leer.component.html',
  styleUrls: ['./leer.component.css']
})
export class LeerComponent {

  robots!:Robot[];

  constructor(private robotService: RobotServiceService, private router:Router){

  }

  leerTodo(){
    this.robotService.leerTodo().subscribe(
      result=>this.robots=result
    )
  }

  detalle(id:number){
    this.router.navigate(['detalle', id])
  }

  modificarUno(id:number){
    this.router.navigate(['modificar', id])
  }

  borrarUno(id:number){
    if(confirm("¿Desea realmente eliminar el robot?")){
      this.robotService.borrarUno(id).subscribe(
        (datos:any) => {
          if(datos){
            alert("Robot eliminado")
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
