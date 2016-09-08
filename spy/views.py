from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet

from spy import models, serializers

def index(request):
    template = 'spy/index.html'
    context = {}
    return render(request, template, context)

class PlayerViewSet(ModelViewSet):
    """
    A viewset for viewing and editing player instances.
    """
    serializer_class = serializers.PlayerSerializer
    queryset = models.Player.objects.all()

class GameViewSet(ModelViewSet):
    """
    A viewset for viewing and editing game instances.
    """
    serializer_class = serializers.GameSerializer
    queryset = models.Game.objects.all()

class MissionViewSet(ModelViewSet):
    """
    A viewset for viewing and editing mission instances.
    """
    serializer_class = serializers.MissionSerializer
    queryset = models.Mission.objects.all()
