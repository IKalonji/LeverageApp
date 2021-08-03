from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

from authentication.serializers import RegisterSerializer


class RegisterViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('username')
    serializer_class = RegisterSerializer

    def post(self, request, format=None):
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return Response(RegisterSerializer.data, status=status.HTTP_201_CREATED)
            # username = form.cleaned_data.get('username')
        return Response(RegisterSerializer.errors, status=status.HTTP_400_BAD_REQUEST)