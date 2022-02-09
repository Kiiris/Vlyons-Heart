from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .serializers import UserSerializer, ConversationSerializer, MessageSerializer
from .models import Message, Conversation
from accounts.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from datetime import datetime

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ConversationList(generics.ListCreateAPIView):
    queryset = Conversation.objects.all()
    serializer_class = ConversationSerializer

class ConversationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Conversation.objects.all()
    serializer_class = ConversationSerializer

class MessageList(generics.ListCreateAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

class MessageDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

@api_view(['GET'])
def index(request):
    date = datetime.now().strftime("%d/%m/%Y %H:%M%S")
    message = 'server is live current time is'
    return Response(data=message + date, status=status.HTTP_200_OK)