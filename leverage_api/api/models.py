from django.db import models


class Campaign(models.Model):
    campaign_name = models.CharField(max_length=100)
    business_reg_number = models.CharField(max_length=100)
    campaign_info = models.TextField(max_length=1000)
    date_started = models.DateTimeField(auto_now=True)
    total_funds_needed = models.IntegerField(default=1)
    total_funds_raised = models.IntegerField(default=1)
    total_funds_left = models.IntegerField(default=1)
    # campaign_donors = {
    #     'user':'someid',
    #     'user2':'otherid'
    # }