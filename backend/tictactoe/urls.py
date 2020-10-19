from django.contrib import admin
from django.urls import path
from tictactoe.views import board_create, board_detail

urlpatterns = [
    path('tictactoe/', board_create),
    path('tictactoe/<int:pk>/', board_detail),
]