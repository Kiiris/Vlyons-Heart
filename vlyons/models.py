
from django.db import models
from django.contrib.postgres.fields import ArrayField







class User(models.Model):
  #use EmailField next time
  GENDERS = ('M','Man'), ('W','Woman'), ('N', 'Nonbinary')
  email = models.EmailField(verbose_name="email", max_length=50, unique=True)
  username = models.CharField(max_length=50)
  date_joined = models.DateTimeField(auto_now_add=True)
  password = models.CharField(max_length=100)
  last_login = models.DateField(auto_now=True)
  gender = models.CharField(max_length=1, choices=GENDERS)
  preference = models.CharField(max_length=1, choices=GENDERS)
  birth_year = models.PositiveSmallIntegerField(default=200, blank=True)
  location = models.CharField(max_length=50)
  self_summary = models.CharField(max_length=100, blank=True)
  description = models.TextField(blank=True, default="Nothing to see here!")
  photo_url = models.URLField()
  hidden = models.BooleanField(blank=True, default=False)
  liked_by = ArrayField(models.CharField(max_length=20), default=list, size=200, blank=True)
  likes = ArrayField(models.CharField(max_length=20), default=list, size=200, blank=True)
  nerdy = models.PositiveSmallIntegerField(default=0, blank=True)
  musical = models.PositiveSmallIntegerField(default=0, blank=True)
  hard_working = models.PositiveSmallIntegerField(default=0, blank=True)
  romantic = models.PositiveSmallIntegerField(default=0, blank=True)
  album = ArrayField(models.URLField(max_length=200), default=list, blank=True)
  
  def __str__(self):
    return (self.username)
    
class Conversation(models.Model):
  title = models.CharField(max_length=50, default="New Match!", blank=True)
  photo_one = models.URLField()
  photo_two = models.URLField()
  user = models.ManyToManyField(User, related_name='conversations')


  
  def __str__(self):
    return(self.title)
      

class Message(models.Model):
  content = models.TextField()
  reaction = models.CharField(max_length=20, blank=True)
  date = models.DateTimeField(auto_now_add=True)
  sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name="senders")
  conversation = models.ForeignKey(Conversation, on_delete=models.CASCADE,related_name='messages', default='')

  def __str__(self):
    return(self.content)



