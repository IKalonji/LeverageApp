import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attend-workshop',
  templateUrl: './attend-workshop.page.html',
  styleUrls: ['./attend-workshop.page.scss'],
})
export class AttendWorkshopPage implements OnInit {
  workshopList = workshops;

  // showWorkshops = true;
  // loading= true;

  constructor() { }

  ngOnInit() {
  }

}

export const workshops = [
  {
    title: "First Steps to success",
    host: "I.Kalonji",
    date: "06-12-2021",
  },

  {
    title: "How to setup funding for your business",
    host: "L.Zaze",
    date: "06-12-2021",
  },
];
//   {
//     title: "Jumpstart your startup",
//     host: "J.Magda",
//     date: "06-12-2021",
//   },
//   {
//     title: "Why you should start small",
//     host: "S.Leope",
//     date: "06-12-2021",
//   },
//   {
//     title: "Tips on how to grow your business",
//     host: "M.Makhatini",
//     date: "06-12-2021",
//   },
//   {
//     title: "Building the right team",
//     host: "B.Fassie",
//     date: "06-12-2021",
//   }
// ];
