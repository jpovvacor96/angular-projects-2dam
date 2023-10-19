import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from '../models/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  url='http://localhost:3000/proveedores';

  constructor(private http:HttpClient) { 

  }

  recuperarProveedores():Observable<Proveedor[]>{
    return this.http.get<Proveedor[]>(`${this.url}`);
  }

  altaProveedor(proveedor:Proveedor):Observable<Proveedor>{
    return this.http.post<Proveedor>(`${this.url}`, proveedor);
  }

  recuperarProveedor(id:number):Observable<Proveedor>{
    return this.http.get<Proveedor>(`${this.url}/${id}`)
  }

  modificarProveedor(id:number,proveedor:Proveedor):Observable<Proveedor>{
    return this.http.put<Proveedor>(`${this.url}/${id}`, proveedor);
  }

  eliminarProveedor(id:number):Observable<Proveedor>{
    return this.http.delete<Proveedor>(`${this.url}/${id}`);
  }

}
