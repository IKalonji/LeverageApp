import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user = {
    username: "Issa Kalonji",
    name: "Issa",
    surname: "Kalonji",
    email: "IKalonji@student.wethinkcode.co.za",
    contactNumber: "074 625 1546"
  }

  constructor() { }

  ngOnInit() {
  }

}
