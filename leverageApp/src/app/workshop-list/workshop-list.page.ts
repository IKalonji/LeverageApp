import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-workshop-list',
  templateUrl: './workshop-list.page.html',
  styleUrls: ['./workshop-list.page.scss'],
})
export class WorkshopListPage implements OnInit {

  workshopList = Workshops;

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  async join(){
    const toast = await this.toastController.create({
      message: 'Workshops join currently under development',
      duration: 3000
    });
    await toast.present();
  }

}

export const Workshops = [
  {
    title: "First Steps to success",
    host: "I.Kalonji",
    date: "06-12-2021",
  },
  {
    title: "First Steps to success",
    host: "I.Kalonji",
    date: "06-12-2021",
  },
  {
    title: "First Steps to success",
    host: "I.Kalonji",
    date: "06-12-2021",
  },
  {
    title: "First Steps to success",
    host: "I.Kalonji",
    date: "06-12-2021",
  },
  {
    title: "First Steps to success",
    host: "I.Kalonji",
    date: "06-12-2021",
  },
  {
    title: "First Steps to success",
    host: "I.Kalonji",
    date: "06-12-2021",
  },
  {
    title: "First Steps to success",
    host: "I.Kalonji",
    date: "06-12-2021",
  },
]