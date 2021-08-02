from django.conf import settings
from django.conf.urls.static import static
from django.urls import include, path
from rest_framework import routers, urlpatterns

from api import views

router = routers.DefaultRouter()
router.register(r'campaings', views.CampaignViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)