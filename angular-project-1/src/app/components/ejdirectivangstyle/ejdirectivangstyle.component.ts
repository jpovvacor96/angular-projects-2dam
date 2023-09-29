import { Component } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangstyle',
  templateUrl: './ejdirectivangstyle.component.html',
  styleUrls: ['./ejdirectivangstyle.component.css']
})
export class EjdirectivangstyleComponent {

  puntuacion!:number;

  setColor(){
    if(this.puntuacion>5){
      return 'green';
    }
    else if(this.puntuacion==5){
      return 'yellow';
    }
    else{
      return 'red';
    }
  }

}
