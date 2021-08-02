import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-founders-network-tabs-post-community',
  templateUrl: './founders-network-tabs-post-community.page.html',
  styleUrls: ['./founders-network-tabs-post-community.page.scss'],
})
export class FoundersNetworkTabsPostCommunityPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async onClick(){
    const toast = await new ToastController().create(
      {
        message: "Message posted to the Community",
        duration: 2000
      }
    );
    await toast.present();
  }
}
