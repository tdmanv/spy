from __future__ import unicode_literals

from django.db import models


class Player(models.Model):
    PLAYER_ROLES = (
	(0, 'Unset'),
	(1, 'Resistance'),
	(2, 'Spy'),
	(3, 'Merlin'),
    )
    name = models.CharField(max_length=200)
    role = models.IntegerField(default=0, choices=PLAYER_ROLES)
    active = models.BooleanField(default=True)

class Game(models.Model):
    GAME_STATE = (
	(0, 'New'),
	(1, 'Missions'),
	(2, 'Merlin'),
    )
    state = models.IntegerField(default=0, choices=GAME_STATE)

class Mission(models.Model):
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    number = models.IntegerField(default=0)
    participants = models.IntegerField(default=2)
    required_spies = models.IntegerField(default=2)
    outcome = models.IntegerField(default=-1)
