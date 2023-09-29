import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  @Input() aviso!:string;

  leido:boolean=false;

  marcar(){
    this.leido=!this.leido;
  }

}
