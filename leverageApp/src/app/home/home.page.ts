import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(
    private menuController: MenuController,
    private alertController: AlertController,
    private router: Router,
    private route: ActivatedRoute) {}

  openFirst() {
    this.menuController.enable(true, 'main-content');
    this.menuController.open('main-content');
  }

  async login() {
    const alert = await this.alertController.create({
      header: 'Login',
      inputs: [
        {
          name: 'email',
          type: 'text',
          placeholder: 'email'
        },
        {
          name: 'password',
          type: 'text',
          placeholder: 'Password'
        },
      ],
      buttons:[
      {
        text: "Login",
        handler: ()=>{
          this.router.navigate(['/dashboard'], {relativeTo: this.route})
        }
      },
      "Cancel"
        ],
      }
    );
    await alert.present();
  }

  async signUp() {
    const alert = await this.alertController.create({
      header: 'Login',
      inputs: [
        {
          name: 'email',
          type: 'text',
          placeholder: 'email'
        },
        {
          name: 'password',
          type: 'text',
          placeholder: 'Password'
        },
        {
          name: 'confirm password',
          type: 'text',
          placeholder: 'Password'
        },
      ],
      buttons:[
      {
        text: "sign up",
        handler: ()=>{
          this.login();
        }
      },
      "Cancel"
        ],
      }
    );
    await alert.present();


  }

}
