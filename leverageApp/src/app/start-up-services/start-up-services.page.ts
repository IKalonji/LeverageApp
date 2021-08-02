import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-start-up-services',
  templateUrl: './start-up-services.page.html',
  styleUrls: ['./start-up-services.page.scss'],
})
export class StartUpServicesPage implements OnInit {

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Services are under development and coming soon!',
      duration: 2000
    });
    toast.present();
  }
}

