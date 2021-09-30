import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.page.html',
  styleUrls: ['./formulario2.page.scss'],
})
export class Formulario2Page implements OnInit {
  fecha: Date = new Date();

  info = {
    personal: {
      name: "",
      lastname: "",
      emails: [""],
      phones: ["351-111-1111", "352-222-2222"]
    },
    academic: [
      {
        grade: "",
        school: "",
        start: "",
        end: ""
      } 
    ],
    experience: [
      {
        job: "",
        company: "",
        start: "",
        end: ""
      } 
    ],
    skills: [
      {
        skill: "",
        rate: ""
      } 
    ]

  };

  nombre: string;
  apellidos: string;
  numberslist: any = [""];
  email: string;

  trackByFn(index: any, item: any) {
    return index;
  }
  public anArray: any = [];
  public data;

  constructor() { }

  addAcademic(){
    console.log(this.info.academic);
    var obj = {
      grade: "",
      school: "",
      start: "",
      end: ""
    } 
    this.info.academic.push(obj);
    console.log(this.info.academic)
  }

  addExperience(){
    console.log(this.info.experience);
    var obj = {
      job: "",
      company: "",
      start: "",
      end: ""
    }
    this.info.experience.push(obj);
    console.log(this.info.experience)
  }

  addSkill(){
    console.log(this.info.skills)
    var obj = {
      skill: "",
      rate: ""
    }
    this.info.skills.push(obj);
    console.log(this.info.skills)
  }

  ngOnInit() {
  }

  
/*
  addPhoneNumber(num) {
    console.log(this.info.personal.phones);
    this.info.personal.phones.push(num);
    console.log(this.info.personal.phones);
  }
  */

 addElement(array, dato) {
  console.log(array);
  array.push(dato);
  console.log(array);
}
/*
removePhoneNumber(i) {
  console.log(this.info.personal.phones);
  if (this.info.personal.phones.length > 1)
    this.info.personal.phones.splice(i, 1);
  else if (this.info.personal.phones.length == 1) {
    this.info.personal.phones.splice(i, 1);
    this.info.personal.phones.push("");
  }
  console.log(this.info.personal.phones);
}
*/
removeElement(array, i) {
  console.log(array);
  if (array.length > 1)
    array.splice(i, 1);
  else if (array.length == 1) {
    array.splice(i, 1);
    array.push("");
  }
  console.log(array);
}

submitClick() {
  /*console.log(JSON.stringify(this.info))*/
  var myObj = {
    name: this.nombre,
    lastName: this.apellidos,
    numbers: this.numberslist,
    email: this.email
  }
  console.log(this.info.personal);
  /*var myStrObj = JSON.stringify(myObj);*/
}

}
