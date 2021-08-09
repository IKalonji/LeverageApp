import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, IonSlides, MenuController, ToastController } from '@ionic/angular';
import { DataService } from '../services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('slider', {static: true}) slide: IonSlides

  slideOpts = {
    initialSlide: 0,
    speed: 200,
  };

  slides = [{
    header: "Welcome",
    image:"./../../assets/leverage_logo.png",
    content:"Leverage\nis your go-to community\nfor Start Up founders and investors",
    color:"primary"
  },
  {
    header: "Getting Started",
    image:"./../../assets/getting_started.png",
    content:"Looking to start\nor invest in the next Unicorn?\nUse Leverage to fund or raise funds for your Start up.",
    color:"secondary"
  },
  {
    header: "So much more...!",
    image:"./../../assets/collaborate.png",
    content:"Leverage\nis more than a Start Up funding platform!\nJoin live workshops, take short courses\nand leverage the community to level up",
    color:"tertiary"
  },
]

  todo = {
    title: "Title",
    description: "description"
  }

  showContinue = false;

  user: any;

  constructor(
    private menuController: MenuController,
    private alertController: AlertController,
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService) {}

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
        handler: async (alertData)=>{
          console.log(this.dataService.getUser().email.toLowerCase, alertData.email.toLowerCase(),this.dataService.getUser().password,alertData.password);
          
          let correctUser = this.dataService.getUser().email.toLowerCase() == alertData.email.toLowerCase() && this.dataService.getUser().password == alertData.password ? true : false;
          console.log(correctUser);
          if (correctUser){
            this.router.navigate(['/dashboard'], {relativeTo: this.route})
          } else{
            const toast = await new ToastController().create({
              message: "Incorrect Login Details",
              duration: 2000
            });
            await toast.present() 
          }
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
      animated: true,
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'First Name'
        },
        {
          name: 'surname',
          type: 'text',
          placeholder: 'Surname'
        },
        {
          name: 'contact',
          type: 'text',
          placeholder: 'Contact Number'
        },
        {
          name: 'email',
          type: 'text',
          placeholder: 'Email'
        },
        {
          name: 'user',
          type: 'text',
          placeholder: 'Username'
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
        handler: (alertData)=>{
          this.user = this.dataService.createUser(alertData.username, alertData.name, alertData.surname, alertData.email, alertData.contact, alertData.password)
          this.login();
        }
      },
      "Cancel"
        ],
      }
    );
    await alert.present();

  }

  async slideChanged(){
    let index = await this.slide.getActiveIndex()
    if( index === 2){
      this.showContinue = true;
    }else{
      this.showContinue = false;
    }
  }

  async onClick(){
    const alert = await this.alertController.create({
      header: 'Login',
      animated: true,
      buttons:[
        {
          text: "Login",
          handler: () => {
            this.login();
          }
        },
        {
          text: "Sign Up",
          handler: () => {
            this.signUp();
          }
        }
      ]
    }
    );
    await alert.present();
  }

}
