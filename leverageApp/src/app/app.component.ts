import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  menu = [
    {
      name: "Home",
      icon: "home-outline",
      router: "/dashboard"
    },
    {
      name: "About",
      icon: "information-circle-outline",
      router: "/home"
    },
    {
    name: "My Profile",
    icon: "person",
    router: "/profile"
    },
    {
    name: "Inbox",
    icon: "mail-unread-outline",
    router: "/inbox"
    },
    {
    name: "Funded Campaigns",
    icon: "wallet-outline",
    router: "/funded-campaigns"
    },
    {
    name: "My Workshops",
    icon: "videocam-outline",
    router: "/attend-workshop"
    },
    {
    name: "Logout",
    icon: "log-out-outline"
    },
  ]

  constructor(private router: Router,
    private route: ActivatedRoute,
    private menuController: MenuController) {}

  profile(){
    this.router.navigate(['/profile'], {relativeTo: this.route})
  }

  toggleMenu(){
    this.menuController.close();
  }

}
