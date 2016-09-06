from rest_framework import serializers
from .models import Player, Game, Mission

class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = ('id', 'name', 'game', 'role',)

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ('id', 'state',)

class MissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mission
        fields = ('id', 'game', 'owner', 'number', 'participants',
                  'required', 'vote_yes', 'vote_no', 'outcome',)
