from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from spy.models import Player, Game
from spy.serializers import PlayerSerializer, GameSerializer

def index(request):
    template = 'spy/index.html'
    context = {}
    return render(request, template, context)

def _list(request, cls, cls_serializer):
    if request.method == 'GET':
        objects = cls.objects.all()
        serializer = cls_serializer(objects, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = cls_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def _detail(request, pk, cls, cls_serializer):
    try:
        obj = cls.objects.get(pk=pk)
    except cls.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = cls_serializer(obj)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = cls_serializer(obj, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        obj.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def player_list(request):
    """
    List all players, or create a new player.
    """
    return _list(request, Player, PlayerSerializer)

@api_view(['GET', 'PUT', 'DELETE'])
def player_detail(request, pk):
    """
    Retrieve, update or delete a player instance.
    """
    return _detail(request, pk, Player, PlayerSerializer)

@api_view(['GET', 'POST'])
def game_list(request):
    """
    List all games, or create a new game.
    """
    return _list(request, Game, GameSerializer)

@api_view(['GET', 'PUT', 'DELETE'])
def game_detail(request, pk):
    """
    Retrieve, update or delete a game instance.
    """
    return _detail(request, pk, Game, GameSerializer)

@api_view(['GET', 'POST'])
def mission_list(request):
    """
    List all missions, or create a new mission.
    """
    return _list(request, Mission, MissionSerializer)

@api_view(['GET', 'PUT', 'DELETE'])
def mission_detail(request, pk):
    """
    Retrieve, update or delete a mission instance.
    """
    return _detail(request, pk, Mission, MissionSerializer)
