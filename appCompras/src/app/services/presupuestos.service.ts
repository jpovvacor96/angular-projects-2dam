import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Presupuesto } from '../models/presupuesto';

@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {

  url='http://localhost:3000/presupuestos';

  constructor(private http:HttpClient){

  }

  recuperarPresupuestos():Observable<Presupuesto[]>{
    return this.http.get<Presupuesto[]>(`${this.url}`);
  }

  altaPresupuesto(presupuesto:Presupuesto):Observable<Presupuesto>{
    return this.http.post<Presupuesto>(`${this.url}`, presupuesto);
  }

}
