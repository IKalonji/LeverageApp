import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incubation-hub',
  templateUrl: './incubation-hub.page.html',
  styleUrls: ['./incubation-hub.page.scss'],
})
export class IncubationHubPage implements OnInit {

  cards = [{
    name:"Idea development",
    subheader: "Get help developing your ideas",
    router:'/idea-development',
    color: 'primary'
  },{
    name:"Start-Up services",
    subheader: "Need assistance with additional services?",
    router:'/start-up-services',
    color: 'secondary'
  },{
    name:"Join a workshop",
    subheader: "Gain insights and knowledge through industry experts",
    router:'/workshop-list',
    color: 'tertiary'
  }]

  constructor() { }

  ngOnInit() {
  }

}
