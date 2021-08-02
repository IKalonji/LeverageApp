import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-founders-network-tabs-view-community',
  templateUrl: './founders-network-tabs-view-community.page.html',
  styleUrls: ['./founders-network-tabs-view-community.page.scss'],
})
export class FoundersNetworkTabsViewCommunityPage implements OnInit {

  
  post = [{
    from: "@IKalonji",
    message: "I need assistance with formulatging a business strategy, is there anyone with experience that can assist",
    showReply: false,
    replies: [{
      from: "LZaze",
      message: "Hey, I'll be able to assist. What you need to do is a simple swot analysis on your potential business and take the next steps based on the weaknesses and threats"
      },
      {
      from: "JMampa",
      message: "Just start you'll figure the rest"
      }
    ]
  },
  {
    from: "@IKalonji",
    message: "I need assistance with formulatging a business strategy, is there anyone with experience that can assist",
    showReply: false,
    replies: [{
      from: "LZaze",
      message: "Hey, I'll be able to assist. What you need to do is a simple swot analysis on your potential business and take the next steps based on the weaknesses and threats"
      },
      {
      from: "JMampa",
      message: "Just start you'll figure the rest"
      }
    ]
  },
  {
    from: "@IKalonji",
    message: "I need assistance with formulatging a business strategy, is there anyone with experience that can assist",
    showReply: false,
    replies: [{
      from: "LZaze",
      message: "Hey, I'll be able to assist. What you need to do is a simple swot analysis on your potential business and take the next steps based on the weaknesses and threats"
      },
      {
      from: "JMampa",
      message: "Just start you'll figure the rest"
      }
    ]
  },
  ]

  replies = false;

  constructor() { }

  ngOnInit() {
  }

  async onClick(){
    const toast = await new ToastController().create(
      {
        message: "Replied",
        duration: 2000
      }
    );
    await toast.present()
  }

  viewReplies(i){
    i.showReply = !i.showReply;
  }

}
