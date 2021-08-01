import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-campaigns',
  templateUrl: './display-campaigns.page.html',
  styleUrls: ['./display-campaigns.page.scss'],
})
export class DisplayCampaignsPage implements OnInit {

  data: any[];

  constructor(private router: Router) { 
    this.data = MockData;
  }

  ngOnInit() {
  }

  onClick(){
    this.router.navigate(['/selected-campaign-details'])
  }
    
}

export const MockData = [
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  },
  {
    title: "Express Cash App",
    subtitle: "Modern way to make payments",
    image: "../../assets/campaign.png",
    details: "Our app provides a moderm way to consumers to make and receive payments, through our new patented technology. Funding is required for us to take our business to market. We are offerring a total of 30% equity stake in the business",
    amountRaised: "R100 000"
  }
]
