from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from tictactoe.models import Board, Games, Users
from tictactoe.serializers import BoardSerializer, GamesSerializer, UsersSerializer
from django.views.decorators.csrf import ensure_csrf_cookie

# takes in a username and outputs the Boardserializer data
@api_view(['POST'])
@ensure_csrf_cookie
def board_create(request):

    if request.method == 'POST':
        serializer = BoardSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers={'Access-Control-Allow-Origin': 'http://localhost:8000'})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@ensure_csrf_cookie
def user_create(request):

    if request.method == 'POST':
        serializer = BoardSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers={'Access-Control-Allow-Origin': 'http://localhost:8000'})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Updates the board layout and sends it back to
# the frontend
@api_view(['GET', 'PUT'])
@ensure_csrf_cookie
def board_detail(request, pk):

    try:
        board = Board.objects.get(pk=pk)
    except Board.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = BoardSerializer(board)
        return Response(serializer.data, headers={'Access-Control-Allow-Origin': 'http://localhost:8000'})

    elif request.method == 'PUT':
        serializer = BoardSerializer(board, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, headers={'Access-Control-Allow-Origin': 'http://localhost:8000'})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)