import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Robot } from '../models/robot';


@Injectable({
  providedIn: 'root'
})
export class RobotServiceService {

  url='http://localhost:3000/robots';
  
  constructor(private http:HttpClient) {

  }

  public leerTodo():Observable<Robot[]>{
    return this.http.get<Robot[]>(this.url);
  }

  public leerUno(id:number):Observable<Robot>{
    return this.http.get<Robot>(`${this.url}/${id}`);
  }

  public crearUno(persona:Robot):Observable<Robot>{
    return this.http.post<Robot>(this.url, persona);
  }

  public actualizarUno(id:number, persona:Robot):Observable<Robot>{
    return this.http.put<Robot>(`${this.url}/${id}`, persona);
  }

  public borrarUno(id:number):Observable<Robot>{
    return this.http.delete<Robot>(`${this.url}/${id}`);
  }

}
