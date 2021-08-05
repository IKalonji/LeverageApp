from django.conf import settings
from django.conf.urls.static import static
from django.urls import include, path
from rest_framework import routers, urlpatterns

from api import views

router = routers.DefaultRouter()
router.register(r'api/campaigns', views.CampaignViewSet)
router.register(r'api/workshops', views.WorkshopViewSet)
router.register(r'api/startupservices/courses', views.CoursesViewSet)
router.register(r'users', views.UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

urlpatterns += [
    path('api-auth/', include('rest_framework.urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
