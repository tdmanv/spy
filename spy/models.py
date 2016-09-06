from __future__ import unicode_literals

from django.db import models


class Game(models.Model):
    GAME_STATE = (
	(0, 'ADD_PLAYERS'),
	(1, 'CHOOSE_PARTICIPANTS'),
	(2, 'VOTE_ON_MISSION'),
	(2, 'MERLIN_CHOOSES_SPIES'),
    )
    state = models.IntegerField(default=0, choices=GAME_STATE)

class Player(models.Model):
    PLAYER_ROLES = (
	(0, 'Unset'),
	(1, 'Resistance'),
	(2, 'Spy'),
	(3, 'Merlin'),
    )
    name = models.CharField(max_length=200)
    game = models.ForeignKey(Game, on_delete=models.SET_NULL, null=True)
    role = models.IntegerField(default=0, choices=PLAYER_ROLES)
    #active = models.BooleanField(default=True)

class Mission(models.Model):
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    owner = models.ForeignKey(Player, on_delete=models.CASCADE)
    number = models.IntegerField(default=0)
    participants = models.IntegerField(default=2)
    required = models.IntegerField(default=2)
    vote_yes = models.IntegerField(default=0)
    vote_no = models.IntegerField(default=0)
    outcome = models.IntegerField(default=-1)
