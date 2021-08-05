from django.db.models import fields
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse

from api.models import Campaign, Workshop, Courses


@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'users': reverse('user-list', request=request, format=format),
        # 'snippets': reverse('snippet-list', request=request, format=format)
    })


class UserSerializer(serializers.HyperlinkedModelSerializer):
    # campaigns = serializers.PrimaryKeyRelatedField(many=True, queryset=Campaign.objects.all())
    # workshop = serializers.PrimaryKeyRelatedField(many=True, queryset=Workshop.objects.all())

    class Meta:
        model = User
        fields = ['id', 'username']


class CampaignSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Campaign
        fields = (
            'project_name',
            'founders',
            'industry',
            'description',
            'funding_stage',
            'total_funds_needed',
            'full_project_details',
            'owner'
        )


class WorkshopSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Workshop
        fields = (
            'workshop_title',
            'workshop_date',
            'workshop_description',
            'owner'
        )


class CoursesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Courses
        fields = (
            'course_name',
            'course_description'
        )
