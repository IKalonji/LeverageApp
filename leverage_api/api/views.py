from rest_framework import viewsets, permissions
from django.contrib.auth.models import User

from api.serializers import CampaignSerializer, WorkshopSerializer, CoursesSerializer, UserSerializer
from api.models import Campaign, Workshop, Courses
from api.permissions import IsOwnerOrReadOnly


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `retrieve` actions.
    """
    queryset = User.objects.all().order_by('username')
    serializer_class = UserSerializer


class CampaignViewSet(viewsets.ModelViewSet):
    queryset = Campaign.objects.all().order_by('project_name')
    serializer_class = CampaignSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class WorkshopViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly]
    queryset = Workshop.objects.all().order_by('workshop_title')
    serializer_class = WorkshopSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class CoursesViewSet(viewsets.ModelViewSet):
    queryset = Courses.objects.all().order_by('course_name')
    serializer_class = CoursesSerializer

