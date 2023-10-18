import { Component } from '@angular/core';
import { Presupuesto } from 'src/app/models/presupuesto';
import { PresupuestosService } from 'src/app/services/presupuestos.service';

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styleUrls: ['./presupuestos.component.css']
})
export class PresupuestosComponent {

  presupuestos!:Presupuesto[];

  constructor(private presupuestosService:PresupuestosService){

  }

  recuperarPresupuestos(){
    this.presupuestosService.recuperarPresupuestos().subscribe(result=>this.presupuestos=result)
  }

  ngOnInit():void{
    this.recuperarPresupuestos();
  }

}
