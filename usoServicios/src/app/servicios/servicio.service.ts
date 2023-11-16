import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  url='http://localhost:3000/personas';
  
  constructor(private http:HttpClient) {

  }

  public leerTodo():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.url);
  }

  public leerUno(id:number):Observable<Persona>{
    return this.http.get<Persona>(`${this.url}/${id}`);
  }

  public crearUno(persona:Persona):Observable<Persona>{
    return this.http.post<Persona>(this.url, persona);
  }

  public buscarEmail(email: String):Observable<Persona[]>{
    return this.http.get<Persona[]>(`${this.url}?email=${email}`);
  }

  public actualizarUno(id:number, persona:Persona):Observable<Persona>{
    return this.http.put<Persona>(`${this.url}/${id}`, persona);
  }

  public borrarUno(id:number):Observable<Persona>{
    return this.http.delete<Persona>(`${this.url}/${id}`);
  }

}
