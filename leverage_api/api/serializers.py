from django.db.models import fields
from rest_framework import serializers
from api.models import Campaign, Workshop


class CampaignSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Campaign
        fields = (
            'id',
            'campaign_name',
            'business_reg_number',
            'campaign_info',
            'total_funds_needed',
            'total_funds_raised',
            'total_funds_left'
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