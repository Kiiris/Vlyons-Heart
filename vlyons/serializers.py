from django.db import models
from rest_framework import serializers
from .models import Message, Conversation
from accounts.models import User

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'email', 'name', 'gender', 'preference', 'birth_year', 'location', 'self_summary', 'description', 'photo_url', 'hidden', 'liked_by','likes', 'nerdy', 'musical', 'hard_working', 'romantic', 'album',)

class MessageSerializer(serializers.HyperlinkedModelSerializer):
  user_url = serializers.ModelSerializer.serializer_url_field(
    view_name="user_detail",
  )
  user_id = serializers.PrimaryKeyRelatedField(
    queryset=User.objects.all(),
    source='user'
  )
  conversation_url = serializers.ModelSerializer.serializer_url_field(
    view_name="conversation_detail",
    source="conversation"
  )
  conversation_id = serializers.PrimaryKeyRelatedField(
    queryset=Conversation.objects.all(),
    source="conversation"
  )
  class Meta:
    model = Message
    fields = ('id', 'user_id', 'user_url', 'conversation_id', 'conversation_url' 'content', 'reaction', 'date', 'recipient', 'conversation',) 

class ConversationSerializer(serializers.HyperlinkedModelSerializer):
  message_url = serializers.ModelSerializer.serializer_url_field(
    view_name="message_detail",
  )
  message_id = serializers.PrimaryKeyRelatedField(
    queryset=Message.objects.all(),
    source='message'
  )
  class Meta:
    model = Conversation
    fields = ('id', 'message_id', 'message_url', 'created_at', 'participant',)



