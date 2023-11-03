import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {

  formHorario: FormGroup = this.fb.group({
    nombre: [{ value: '', disabled: true }], 
    cargo: [, [Validators.required]], 
    unidad: [{ value: '', disabled: true }],
    telefono: [{ value: '', disabled: true }],
    email: [, [Validators.required, Validators.email]], 
    tipo: [,],
    nombreActividad: [, [Validators.required, Validators.minLength(5)]], 
    start: [,],
    end: [,],
    dia: [,],
    horaInicio: [,],
    horaFin: [,],
  });

  cargos: string[] = [
    'Profesor Titular de Universidad',
    'Director de Secretariado de Innovación Tecnológica',
  ];

  diasSemana: string[] = [
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado',
    'domingo',
  ];

  horas = Array.from(Array(24).keys()); 

  constructor(private fb: FormBuilder) { } 

  ngOnInit(): void {
    this.formHorario.controls['nombre'].setValue('Manuel Torres Gil');
    this.formHorario.controls['unidad'].setValue('Informática');
    this.formHorario.controls['telefono'].setValue('84030');
  }
  save() {
    console.log('this.formHorario :>> ', this.formHorario);
  }

}
