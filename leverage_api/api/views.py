from rest_framework import viewsets

from api.serializers import CampaignSerializer
from api.models import Campaign


class CampaignViewSet(viewsets.ModelViewSet):
    queryset = Campaign.objects.all().order_by('campaign_name')
    serializer_class = CampaignSerializer
