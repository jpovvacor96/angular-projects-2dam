import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-modproveedor',
  templateUrl: './modproveedor.component.html',
  styleUrls: ['./modproveedor.component.css']
})
export class ModproveedorComponent implements OnInit{

  //##################
  //LISTA DE ATRIBUTOS
  //##################

  proveedor!:Proveedor;

  p1!:number;

  provincias:string[] = ['Alava','Albacete','Alicante','Almería','Asturias','Avila','Badajoz','Barcelona','Burgos','Cáceres','Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba','La Coruña','Cuenca','Gerona','Granada','Guadalajara','Guipúzcoa','Huelva','Huesca','Islas Baleares','Jaén','León','Lérida','Lugo','Madrid','Málaga','Murcia','Navarra','Orense','Palencia','Las Palmas','Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria','Tarragona','Santa Cruz de Tenerife','Teruel','Toledo','Valencia','Valladolid','Vizcaya','Zamora','Zaragoza']

  constructor(private proveedoresService:ProveedoresService, private router:Router, private activatedRoute:ActivatedRoute){
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

  recuperarProveedor(id:number){
    this.proveedoresService.recuperarProveedor(id).subscribe(
      result=>this.proveedor=result
    );
  }

  modificarProveedor(id: number){
      this.proveedoresService.modificarProveedor(id, this.proveedor).subscribe((datos:any) => {
        if(datos){
          alert("Proveedor modificado")
          this.router.navigate(["/proveedores"])
        }
      }
      );
  }

  cancelar(){
    this.router.navigate(["/proveedores"])
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (parametros: ParamMap)=>{
        this.p1=parseInt(parametros.get('id')!);
      }  
    ); 
    this.recuperarProveedor(this.p1);
  }

}
