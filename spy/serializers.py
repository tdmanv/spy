from rest_framework import serializers
from .models import Player, Game, Mission


class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ('id', 'state')

class PlayerSerializer(serializers.ModelSerializer):
    game_id = serializers.IntegerField(default=-1)
    class Meta:
        model = Player
        fields = ('id', 'name', 'game_id', 'role',)

    def create(self, validated_data):
        game_id = validated_data.pop('game_id')
        game = Game.objects.get(pk=game_id)
        return Player.objects.create(game=game, **validated_data)

class MissionSerializer(serializers.ModelSerializer):
    owner = PlayerSerializer(read_only=True)
    game = GameSerializer(read_only=True)
    class Meta:
        model = Mission
        fields = ('id', 'game', 'owner', 'order', 'participants',
                  'required', 'vote_yes', 'vote_no', 'outcome',)


