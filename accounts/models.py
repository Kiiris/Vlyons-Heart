from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin


# Create your models here.

class UserManager(BaseUserManager):
  use_in_migrations = True
  
  def create_user(self, email, username, password, **extra_fields):
    if not email:
      raise ValueError("Users must have email address.")
    email=self.normalize_email(email)
    user=self.model(email=email, username=username, **extra_fields)
    user.set_password(password)
    user.save()
    return user

  def create_superuser(self, email, username, password, **extra_fields):
    extra_fields.setdefault('is_superuser', True)
    extra_fields.setdefault('is_staff', True)
    extra_fields.setdefault('is_active', True)
    if extra_fields.get('is_staff') is not True:
      raise ValueError('superuser must be assigned to is_staff')
    if extra_fields.get('is_superuser') is not True:
      raise ValueError('superuser must have is_superuser=True')

    return self.create_user(username, email, password, **extra_fields)

class User(AbstractBaseUser, PermissionsMixin):
  #use EmailField next time
  GENDERS = ('M','Man'), ('W','Woman'), ('N', 'Nonbinary')
  email = models.EmailField(verbose_name="email", max_length=50, unique=True)
  username = models.CharField(max_length=50)
  date_joined = models.DateTimeField(auto_now_add=True)
  password = models.CharField(max_length=100)
  last_login = models.DateField(auto_now=True)
  is_admin = models.BooleanField(default=False)
  is_active = models.BooleanField(default=True)
  is_staff = models.BooleanField(default=False)
  is_superuser = models.BooleanField(default=False)
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

  objects = UserManager()

  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = ['username']

  def __str__(self):
    return self.username
