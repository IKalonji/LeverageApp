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
    initialSlide: 0,
    speed: 200
  };

  slides = [{
    header: "Welcome",
    image:"./../../assets/leverage_logo.png",
    content:"Leverage\nis your go-to community\nfor Start Up founders and investors",
  },
  {
    header: "Getting Started",
    image:"./../../assets/getting_started.png",
    content:"Looking to start\nor invest in the next Unicorn?\nUse Leverage to fund or raise funds for your Start up.",
  },
  {
    header: "So much more...!",
    image:"./../../assets/collaborate.png",
    content:"Leverage\nis more than a Start Up funding platform!\nJoin live workshops, take short courses\nand leverage the community to level up",
  },
]

  todo = {
    title: "Title",
    description: "description"
  }

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
          type: 'password',
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
          type: 'password',
          placeholder: 'Password'
        },
        {
          name: 'confirm password',
          type: 'password',
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
