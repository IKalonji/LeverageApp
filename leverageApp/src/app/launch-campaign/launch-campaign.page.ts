import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, IonCard } from '@ionic/angular';

@Component({
  selector: 'app-launch-campaign',
  templateUrl: './launch-campaign.page.html',
  styleUrls: ['./launch-campaign.page.scss'],
})
export class LaunchCampaignPage implements OnInit {

  inputItem = ["Project Name", "Founders", "Industry", "Description", "Funding Stage", "Funding required", "Full Project Details", "Upload Pitch Video/Images"]
  constructor(private actionSheetController: ActionSheetController,
    private router: Router) { }

  ngOnInit() {
  }

  async submitted(){
    const actionSheet = await this.actionSheetController.create(
      {
        header: 'Submit Funding Campaign?',
        buttons: [
          {
            text: "Confirm",
            icon: "checkmark-outline",
            handler: () => {
              this.router.navigate(['/campaign-modal/campaign-dashboard'], )
            }
          },
          {
            text: "Cancel",
            icon: "close-outline"
          }
        ]
      }
    );

    await actionSheet.present();

  }
  
}

export interface CampaignDetails{
  projectName: string,
  founders: string,
  industry: string,
  description: string,
  fundingStage: string,
  fundingRequired: number,
  projectDetails: string,
  pitch: any
}
