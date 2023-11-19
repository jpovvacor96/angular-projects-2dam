import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Robot } from 'src/app/models/robot';
import { RobotServiceService } from 'src/app/services/robot-service.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent {

  robot!:Robot;

  id!:number;

  tipos:String[]=['Amor', 'Amistad', 'Trabajo', 'Lucha'];

  constructor(private robotService:RobotServiceService, private router:Router, private activatedRouter:ActivatedRoute){
    this.robot={
      id:0,
      nombre:'',
      info:'',
      email:'',
      tipo:'',
      foto:''
    }
  }

  leerUno(id: number) {
    this.robotService.leerUno(id).subscribe(
      result => this.robot = result
    )
  }

  actualizarUno(id: number) {
    this.robotService.actualizarUno(id, this.robot).subscribe((datos: any) => {
      if (datos) {
        alert('Robot actualizado')
        this.router.navigate(["/leer"])
      }
      else {
        alert('Error en la modificación de datos')
      }
    }
    );
  }

  crearFoto(){
    this.robot.foto=`https://robohash.org/${this.robot.nombre}`;
    return this.robot.foto
  }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(
      (params: ParamMap) => {
        this.id = parseInt(params.get('id')!)
      }
    )
    this.leerUno(this.id)
  }

}
