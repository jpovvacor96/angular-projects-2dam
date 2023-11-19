import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Robot } from 'src/app/models/robot';
import { RobotServiceService } from 'src/app/services/robot-service.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {

  robot!:Robot

  tipos:String[]=['Amor', 'Amistad', 'Trabajo', 'Lucha'];

  constructor(private robotService:RobotServiceService, private router:Router){
    this.robot={
      id:0,
      nombre:'',
      foto:'',
      email:'',
      tipo:'',
      info:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
    }
  }

  crearUno(){
    this.robotService.crearUno(this.robot).subscribe((datos:any)=>{
      if(datos){
        alert('Nuevo robot insertado');
        this.router.navigate(["/leer"])
      }
      else{
        alert('Error en el registro del nuevo robot')
      }
    }) 
  }

  crearFoto(){
    this.robot.foto=`https://robohash.org/${this.robot.nombre}`;
    return this.robot.foto
  }

}
