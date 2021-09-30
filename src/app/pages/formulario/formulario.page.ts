import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  nombre:string;
  apellidos:string;
  usuario:string;
  email:string;
  password:string;
  constructor() { }

  ngOnInit() {
  }
   
  onClick(){
    console.log(this.nombre+this.apellidos+this.usuario+this.password);
  }

}
