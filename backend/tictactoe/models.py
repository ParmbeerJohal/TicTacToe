from django.db import models

# Create your models here.

class Board(models.Model):
    user1 = models.CharField(max_length=50, blank=True)
    user2 = models.CharField(max_length=50, blank=True)
    winner = models.CharField(max_length=50, blank=True)
    loser = models.CharField(max_length=50, blank=True)
    istied = models.BooleanField(null=True, blank=True)
    layout = models.CharField(max_length=10, blank=True)

class Games(models.Model):
    game = models.ForeignKey(Board, on_delete=models.CASCADE)

class Users(models.Model):
    username = models.CharField(max_length=50)
    wins = models.IntegerField(blank=True)
    losses = models.IntegerField(blank=True)
    ties = models.IntegerField(blank=True)

    def __str__(self):
        return self.username

