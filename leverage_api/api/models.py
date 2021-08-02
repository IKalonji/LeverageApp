from django.db import models


class Campaign(models.Model):
    campaign_name = models.CharField(max_length=100)
    business_reg_number = models.CharField(max_length=100)
    campaign_info = models.TextField(max_length=1000)
