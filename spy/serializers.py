from rest_framework import serializers
from .models import Player, Game, Mission


class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ('id', 'state')

class PlayerSerializer(serializers.ModelSerializer):
    game = GameSerializer(read_only=True)
    class Meta:
        model = Player
        fields = ('id', 'name', 'game', 'role',)

class MissionSerializer(serializers.ModelSerializer):
    owner = PlayerSerializer(read_only=True)
    game = GameSerializer(read_only=True)
    class Meta:
        model = Mission
        fields = ('id', 'game', 'owner', 'order', 'participants',
                  'required', 'vote_yes', 'vote_no', 'outcome',)


