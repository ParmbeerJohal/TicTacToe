from rest_framework import serializers
from tictactoe.models import Board, Games, Users

class BoardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Board
        fields = [
            'user1',
            'user2',
            'winner',
            'loser',
            'istied',
            'layout',
        ]

class GamesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Games
        fields = [
            'game',
        ]

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = [
            'username',
            'wins',
            'losses',
            'ties',
        ]