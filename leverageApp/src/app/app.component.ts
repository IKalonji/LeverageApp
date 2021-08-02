import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  menu = [
    {
      name: "About",
      icon: "information-circle-outline"
    },
    {
    name: "My Profile",
    icon: "person"
    },
    {
    name: "Inbox",
    icon: "mail-unread-outline"
    },
    {
    name: "Logout",
    icon: "log-out-outline"
    },
  ]
  constructor(private router: Router,
    private route: ActivatedRoute) {}

  homeClicked(){
    this.router.navigate(['/dashboard'], {relativeTo: this.route})
  }

  clicked(){
    this.router.navigate(['/home'], {relativeTo: this.route})
  }
}
