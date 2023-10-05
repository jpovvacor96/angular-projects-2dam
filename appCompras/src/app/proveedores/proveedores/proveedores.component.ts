import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor';
import { ProveedoresService } from 'src/app/services/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  proveedores!:Proveedor[];

  constructor(private proveedoresService:ProveedoresService){

  }

  recuperarProveedores(){
    this.proveedoresService.recuperarProveedores().subscribe(
      result=>this.proveedores=result
    )
  }

  ngOnInit(): void {
    this.recuperarProveedores();
  }

}
