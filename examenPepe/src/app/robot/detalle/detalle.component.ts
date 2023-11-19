import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Robot } from 'src/app/models/robot';
import { RobotServiceService } from 'src/app/services/robot-service.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {

  robot:Robot

  id!:number;

  constructor(private robotService:RobotServiceService, private router:Router, private activatedRouter: ActivatedRoute){
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

  volver(){
    this.router.navigate(["/leer"])
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
