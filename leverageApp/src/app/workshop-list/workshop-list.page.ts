import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-workshop-list',
  templateUrl: './workshop-list.page.html',
  styleUrls: ['./workshop-list.page.scss'],
})
export class WorkshopListPage implements OnInit {

  workshopList = Workshops;
  showWorkshops = false;
  loading= false;

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  async join(){
    const toast = await this.toastController.create({
      message: 'You have been added to the event',
      duration: 3000
    });
    await toast.present();
  }

  onClick(){
    this.loading = true;
    setTimeout(()=>{
      this.loading = false;
      this.showWorkshops = true;
    }, 3000)
    
  }

}

export const Workshops = [
  {
    title: "First Steps to success",
    host: "I.Kalonji",
    date: "06-12-2021",
  },
  {
    title: "How to setup funding for your business",
    host: "L.Zaze",
    date: "06-12-2021",
  },
  {
    title: "Jumpstart your startup",
    host: "J.Magda",
    date: "06-12-2021",
  },
  {
    title: "Why you should start small",
    host: "S.Leope",
    date: "06-12-2021",
  },
  {
    title: "Tips on how to grow your business",
    host: "M.Makhatini",
    date: "06-12-2021",
  },
  {
    title: "Building the right team",
    host: "B.Fassie",
    date: "06-12-2021",
  }
]