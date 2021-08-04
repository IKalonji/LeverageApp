from django.db.models import fields
from rest_framework import serializers
from api.models import Campaign, Workshop, Courses


class CampaignSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Campaign
        fields = (
            'id',
            'project_name',
            'founders',
            'industry',
            'description',
            'funding_stage',
            'total_funds_needed',
            'full_project_details',
            'campaign_pitch'
        )


class WorkshopSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Workshop
        fields = (
            'id',
            'workshop_title',
            'workshop_date',
            'workshop_description',
        )


class CoursesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Courses
        fields = (
            'course_name',
            'course_description'
        )