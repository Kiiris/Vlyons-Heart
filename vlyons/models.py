from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.conf import settings
from django.contrib.auth.models import AbstractUser


class Conversation(models.Model):
  created_at = models.DateField()
  participant = models.ManyToManyField(settings.AUTH_USER_MODEL)
  
  def __str__(self):
    return(self.participant)
      

class Message(models.Model):
  content = models.TextField()
  reaction = models.CharField(max_length=20, blank=True)
  date = models.DateTimeField()
  recipient = models.ManyToManyField(settings.AUTH_USER_MODEL)

  def __str__(self):
    return(self.recipient)


