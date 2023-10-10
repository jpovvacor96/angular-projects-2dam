import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/models/proveedor';
import { ProveedoresService } from 'src/app/services/proveedores.service';

@Component({
  selector: 'app-addproveedor',
  templateUrl: './addproveedor.component.html',
  styleUrls: ['./addproveedor.component.css']
})
export class AddproveedorComponent {

  proveedor!:Proveedor;

  provincias:string[] = ['Alava','Albacete','Alicante','Almería','Asturias','Avila','Badajoz','Barcelona','Burgos','Cáceres','Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba','La Coruña','Cuenca','Gerona','Granada','Guadalajara','Guipúzcoa','Huelva','Huesca','Islas Baleares','Jaén','León','Lérida','Lugo','Madrid','Málaga','Murcia','Navarra','Orense','Palencia','Las Palmas','Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria','Tarragona','Santa Cruz de Tenerife','Teruel','Toledo','Valencia','Valladolid','Vizcaya','Zamora','Zaragoza']

  constructor(private proveedoresService:ProveedoresService, private router:Router){
    this.proveedor={
      id:0,
      nombre:'',
      cif:'',
      direccion:'',
      cp:'',
      localidad:'',
      provincia:'',
      telefono:0,
      email:'',
      contacto:''
  
    }
  }

  altaProveedor(){
    this.proveedoresService.altaProveedor(this.proveedor).subscribe((datos:any)=>{
      if(datos){
        alert("Proveedor insertado")
        this.router.navigate(["/proveedores"])
      }
    })
  }

}
