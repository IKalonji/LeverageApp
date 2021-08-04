from rest_framework import viewsets

from api.serializers import CampaignSerializer, WorkshopSerializer, CoursesSerializer
from api.models import Campaign, Workshop, Courses


class CampaignViewSet(viewsets.ModelViewSet):
    queryset = Campaign.objects.all().order_by('project_name')
    serializer_class = CampaignSerializer


class WorkshopViewSet(viewsets.ModelViewSet):
    queryset = Workshop.objects.all().order_by('workshop_title')
    serializer_class = WorkshopSerializer


class CoursesViewSet(viewsets.ModelViewSet):
    queryset = Courses.objects.all().order_by('course_name')
    serializer_class = CoursesSerializer
