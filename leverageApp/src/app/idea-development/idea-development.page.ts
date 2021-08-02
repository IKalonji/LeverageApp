import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-idea-development',
  templateUrl: './idea-development.page.html',
  styleUrls: ['./idea-development.page.scss'],
})
export class IdeaDevelopmentPage implements OnInit {

  cards = [{
    name:"Get a Mentor",
    subheader: "Connect with a mentor to assist with your start-up",
    color: 'success'
  },{
    name:"Courses",
    subheader: "Improve your knowledge by taking a short course",
    color: 'tertiary'
  },{
    name:"Information Hub",
    subheader: "Access a wealth of information/opportunities for your start-up",
    color: 'secondary'
  }]

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Watch the space, coming soon!',
      duration: 3000
    });
    toast.present();
  }
}
