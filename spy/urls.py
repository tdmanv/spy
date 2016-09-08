from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter

from . import views


router = DefaultRouter()
router.register(r'players', views.PlayerViewSet)
router.register(r'games', views.GameViewSet)
router.register(r'missions', views.MissionViewSet)

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^api/v1/', include(router.urls)),
]
