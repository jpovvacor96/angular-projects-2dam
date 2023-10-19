import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Presupuesto } from 'src/app/models/presupuesto';
import { PresupuestosService } from 'src/app/services/presupuestos.service';

@Component({
  selector: 'app-addpresupuesto',
  templateUrl: './addpresupuesto.component.html',
  styleUrls: ['./addpresupuesto.component.css']
})
export class AddpresupuestoComponent {

  presupuesto!:Presupuesto;

  constructor(private presupuestoService:PresupuestosService, private router:Router){
    this.presupuesto={
      id: 0,
      proveedor: '',
      fecha: '',
      concepto: '',
      base: 0,
      tipo: '',
      iva: 0,
      total: 0
    }
  }

  altaPresupuesto(){
    this.presupuesto.iva = this.presupuesto.base * parseFloat(this.presupuesto.tipo);
    this.presupuesto.total = this.presupuesto.base + (this.presupuesto.base *
      parseFloat(this.presupuesto.tipo));
    this.presupuestoService.altaPresupuesto(this.presupuesto).subscribe(
      (datos:any)=>{
        if(datos){
          alert("Presupuesto insertado")
          this.router.navigate(["/presupuestos"])
        }
      }
    )
  }

  calculaIVA(){
    return this.presupuesto.base * Number.parseFloat(this.presupuesto.tipo);
  }

}
