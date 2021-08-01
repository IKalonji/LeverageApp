import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-selected-campaign-details',
  templateUrl: './selected-campaign-details.page.html',
  styleUrls: ['./selected-campaign-details.page.scss'],
})
export class SelectedCampaignDetailsPage implements OnInit {

  campaignData =   {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000",
    founder: "Issa Kalonji, Luthando Zaze",
    startupStage: "Pre-revenue",
    daysRemaining: 14,
    currentRevenue: 0,
    prototypeAvailable: "Yes",
    projectedRevenue: "R1 000 000"
  }

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  async fund(){
    const toast = await this.toastController.create({
      message: 'Funding payments currently under development',
      duration: 3000
    });
    toast.present();
  }
  
}
