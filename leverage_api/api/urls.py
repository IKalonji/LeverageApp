from django.conf import settings
from django.conf.urls.static import static
from django.urls import include, path
from rest_framework import routers, urlpatterns

from api import views
from authentication import views as auth_views
# from authentication.api import views as auth_views

router = routers.DefaultRouter()
router.register(r'api/campaigns', views.CampaignViewSet)
router.register(r'api/register', auth_views.RegisterViewSet)
router.register(r'api/workshops', views.WorkshopViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)