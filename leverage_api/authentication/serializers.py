from rest_framework import serializers
from django.contrib.auth.models import User


class RegisterSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = (
            'username',
            'email',
        )
