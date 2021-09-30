import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-datos-formulario',
  templateUrl: './datos-formulario.page.html',
  styleUrls: ['./datos-formulario.page.scss'],
})
export class DatosFormularioPage implements OnInit {

  info=null
  torneos=null
  experience=null
  skills=null

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.info=this.activatedRoute.snapshot.paramMap.get('info');
    console.log(this.info);

    this.torneos=this.activatedRoute.snapshot.paramMap.get('torneos');
    console.log(this.info.torneos);
  
    this.experience=this.activatedRoute.snapshot.paramMap.get('experience');
    console.log(this.info.experience);

    this.skills=this.activatedRoute.snapshot.paramMap.get('skills');
    console.log(this.info.skills);
  }

}
