import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incubation-hub',
  templateUrl: './incubation-hub.page.html',
  styleUrls: ['./incubation-hub.page.scss'],
})
export class IncubationHubPage implements OnInit {

  cards = [{
    name:"idea development",
    router:'/idea-development'
  },{
    name:"start up services",
    router:'/start-up-services'
  },{
    name:"join a workshop",
    router:'/workshop-list'
  }]

  constructor() { }

  ngOnInit() {
  }

}
