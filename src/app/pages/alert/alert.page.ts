import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
   nombre:string;
    apellido:string;
  constructor(public alertController: AlertController ) { }
  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Ayuda',
      subHeader: 'Subtitle',
      message: 'contancto con el desarrollador aponce331@accitesz.com',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelar');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Botón Ok');
            

          }
        }
      ]
    });

    await alert.present();
  }


  async presentInput() {
    const input = await this.alertController.create({
      header: 'Datos',
      subHeader:'Ingrese su nombre:',
      inputs: [
        {
          name: 'txtNombre',
          type: 'text',
          placeholder: 'Nombre'
        },
        {
          name: 'txtApellido',
          type: 'text',
          placeholder: 'Apellido'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Confirm Ok');
            this.nombre=data.txtNombre;
            this.apellido=data.txtApellido;
          }
        }
      ]
    });

    await input.present();
  }


  ngOnInit() {
  }

}
