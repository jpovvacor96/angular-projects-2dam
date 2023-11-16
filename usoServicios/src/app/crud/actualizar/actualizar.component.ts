import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  persona!: Persona;

  id!: number;

  tipos: String[] = ['Amigos', 'Familia', 'Trabajo'];

  constructor(private servicioService: ServicioService, private router: Router, private activatedRouter: ActivatedRoute) {
    this.persona = {
      id: 0,
      nombre: '',
      telefono: '',
      email: '',
      tipo: ''
    }
  }

  leerUno(id: number) {
    this.servicioService.leerUno(id).subscribe(
      result => this.persona = result
    )
  }

  buscarEmail() {
    this.servicioService.buscarEmail(this.persona.email).subscribe(
      result => this.persona = result[0]
    );
  }

  actualizarUno(id: number) {
    this.servicioService.actualizarUno(id, this.persona).subscribe((datos: any) => {
      if (datos) {
        alert('Contacto actualizado')
        this.router.navigate(["/leer"])
      }
      else {
        alert('Error en la modificación de datos')
      }
    }
    );
  }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(
      (params: ParamMap) => {
        this.id = parseInt(params.get('id')!)
      }
    )
    this.leerUno(this.id)
  }

}
