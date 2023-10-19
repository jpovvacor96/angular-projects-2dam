import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/models/proveedor';
import { ProveedoresService } from 'src/app/services/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  proveedores!:Proveedor[];

  constructor(private proveedoresService:ProveedoresService, private router:Router){

  }

  recuperarProveedores(){
    this.proveedoresService.recuperarProveedores().subscribe(
      result=>this.proveedores=result
    )
  }

  recuperarProveedor(id:number){
    this.router.navigate(['modproveedor', id])
  }

  eliminarProveedor(id:number){
    if(confirm("¿Desea realmente eliminar el proveedor?")){
      this.proveedoresService.eliminarProveedor(id).subscribe(
        (datos:any) => {
          if(datos){
            alert("Proveedor borrado")
            this.recuperarProveedores();
          }
        }
      )
    }
  }

  ngOnInit(): void {
    this.recuperarProveedores();
  }

}
