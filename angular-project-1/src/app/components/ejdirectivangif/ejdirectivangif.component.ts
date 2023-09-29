import { Component } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangif',
  templateUrl: './ejdirectivangif.component.html',
  styleUrls: ['./ejdirectivangif.component.css']
})
export class EjdirectivangifComponent {
  
  nombre!:String;

  capital!:String;

  constructor(){

  }

  setResultado(){
    if(this.capital==="Madrid"){
      return true;
    }
    else{
      return false;
    }
  }
}
