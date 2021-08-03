from rest_framework import viewsets

from api.serializers import CampaignSerializer, WorkshopSerializer
from api.models import Campaign, Workshop


class CampaignViewSet(viewsets.ModelViewSet):
    queryset = Campaign.objects.all().order_by('campaign_name')
    serializer_class = CampaignSerializer


class WorkshopViewSet(viewsets.ModelViewSet):
    queryset = Workshop.objects.all().order_by('workshop_title')
    serializer_class = WorkshopSerializer
