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

}
