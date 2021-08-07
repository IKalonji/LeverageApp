from django.db import models
from django.contrib.auth.models import User


class Campaign(models.Model):
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    project_name = models.CharField(max_length=100)
    founders = models.CharField(max_length=200)
    industry = models.CharField(max_length=80)
    business_reg_number = models.CharField(max_length=100)
    description = models.TextField(max_length=200)
    funding_stage = models.CharField(max_length=100)
    date_started = models.DateTimeField(auto_now=True)
    total_funds_needed = models.IntegerField(default=1)
    full_project_details = models.TextField(max_length=1000)
    campaign_pitch = models.ImageField()

    def __str__(self):
        return self.project_name


class Workshop(models.Model):
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    workshop_title = models.CharField(max_length=100)
    workshop_description = models.TextField(max_length=250)
    date_created = models.DateTimeField(auto_now=True)
    workshop_date = models.DateField()

    def __str__(self):
        return self.workshop_title


class Courses(models.Model):
    course_name = models.CharField(max_length=60)
    course_description = models.CharField(max_length=200)

    def __str__(self):
        return self.course_name
