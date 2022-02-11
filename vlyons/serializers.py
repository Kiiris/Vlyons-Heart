from django.db import models
from rest_framework import serializers
from .models import Message, Conversation,User


class UserSerializer(serializers.ModelSerializer):
  conversations = serializers.HyperlinkedRelatedField(
    view_name='conversation_detail',
    many=True,
    read_only=True
  )
  class Meta:
    model = User
    fields = ('id', 'email', 'conversations', 'username', 'gender', 'preference', 'birth_year', 'location', 'self_summary', 'description', 'photo_url', 'hidden', 'liked_by','likes', 'nerdy', 'musical', 'hard_working', 'romantic', 'album', 'password',)

class MessageSerializer(serializers.ModelSerializer):
  user_id = serializers.ModelSerializer.serializer_url_field(
    view_name='user_detail'
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
    fields = ('id','content', 'conversation_url', 'message_url', 'user_id', 'conversation_id', 'reaction', 'date', 'sender',) 

class ConversationSerializer(serializers.HyperlinkedModelSerializer):
  user=serializers.PrimaryKeyRelatedField(
   queryset=User.objects.all(), 
   many=True)

  messages = serializers.PrimaryKeyRelatedField(
    #queryset=User.objects.all()
    read_only=True,
    many=True)
  class Meta:
    model = Conversation
    fields = ('id',  'title', 'photo_one', 'photo_two', 'messages','user',)



