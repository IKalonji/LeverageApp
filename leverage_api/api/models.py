from django.db import models
from django.contrib.auth.models import User


class Campaign(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    campaign_name = models.CharField(max_length=100)
    business_reg_number = models.CharField(max_length=100)
    campaign_info = models.TextField(max_length=1000)
    date_started = models.DateTimeField(auto_now=True)
    total_funds_needed = models.IntegerField(default=1)
    total_funds_raised = models.IntegerField(default=1)
    total_funds_left = models.IntegerField(default=1)

    def __str__(self):
        return self.campaign_name


class Workshop(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    workshop_title = models.CharField(max_length=100)
    workshop_description = models.TextField(max_length=250)
    date_created = models.DateTimeField(auto_now=True)
    workshop_date = models.DateField()

    def __str__(self):
        return self.workshop_title