import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {

  message = [{
    from: "I Kalonji",
    message: "Hey this is a test"
  }]

  constructor() { }

  ngOnInit() {
  }

  async onClick(){
    const toast = await new ToastController().create(
      {
        message: "Message has been sent",
        duration: 2000
      }
    )
    await toast.present()
  }

}
