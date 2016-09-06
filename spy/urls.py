from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^api/v1/player/$', views.player_list),
    url(r'^api/v1/players/(?P<pk>[0-9]+)$', views.player_detail),
    url(r'^api/v1/game/$', views.game_list),
    url(r'^api/v1/games/(?P<pk>[0-9]+)$', views.game_detail),
    url(r'^api/v1/mission/$', views.mission_list),
    url(r'^api/v1/missions/(?P<pk>[0-9]+)$', views.mission_detail),
]

urlpatterns = format_suffix_patterns(urlpatterns)
