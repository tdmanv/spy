from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^api/v1/player/$', views.player_list),
    url(r'^api/v1/players/(?P<pk>[0-9]+)$', views.player_detail),
]

urlpatterns = format_suffix_patterns(urlpatterns)
