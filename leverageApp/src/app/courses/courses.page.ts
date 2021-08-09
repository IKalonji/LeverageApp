import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async onClick(){
    const toaster = await new ToastController().create({
      message: "Course coming soon",
      duration: 3000
    });
    await toaster.present();
  }
}
