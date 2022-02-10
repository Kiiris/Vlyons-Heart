
from django import forms
from django.contrib import admin
from django import forms
from django.forms import TextInput, Textarea, CharField
from .models import Conversation, Message, User

admin.site.register(User)
admin.site.register(Message)
admin.site.register(Conversation)
