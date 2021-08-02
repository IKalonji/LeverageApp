from django.db.models import fields
from rest_framework import serializers
from api.models import Campaign

class CampaignSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Campaign
        fields = ('campaign_name', 'business_reg_number', 'campaign_info')
