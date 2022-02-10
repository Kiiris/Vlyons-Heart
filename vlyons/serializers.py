from django.db import models
from rest_framework import serializers
from .models import Message, Conversation,User


class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'email', 'username', 'gender', 'preference', 'birth_year', 'location', 'self_summary', 'description', 'photo_url', 'hidden', 'liked_by','likes', 'nerdy', 'musical', 'hard_working', 'romantic', 'album', 'password',)

class MessageSerializer(serializers.ModelSerializer):
  recipient = UserSerializer(
     many=True,
     read_only=True
  )
  message_url = serializers.ModelSerializer.serializer_url_field(
    view_name='message_detail'
  )
  conversation_url = serializers.ModelSerializer.serializer_url_field(
    view_name='conversation_detail'
  )
  conversation_id = serializers.PrimaryKeyRelatedField(
    queryset=Conversation.objects.all(),
    source='conversation')
  class Meta:
    model = Message
    fields = ('id','content', 'conversation_url', 'message_url', 'conversation_id', 'reaction', 'date', 'recipient',) 

class ConversationSerializer(serializers.HyperlinkedModelSerializer):
  participant = UserSerializer(
    many = True, 
    read_only = True
  )
  conversation_url = serializers.ModelSerializer.serializer_url_field(
    view_name='conversation_detail'
  )
  class Meta:
    model = Conversation
    fields = ('id',  'title', 'participant', 'conversation_url')



