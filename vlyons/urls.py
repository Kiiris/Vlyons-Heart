from django.urls import path
from django.urls import include
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('user/', views.UserList.as_view(), name='user_list'),
    path('user/<int:pk>', views.UserDetail.as_view(), name='user_detail'),
    path('message/', views.MessageList.as_view(), name='message_list'),
    path('message/<int:pk>', views.MessageDetail.as_view(), name='message_detail'),
    path('conversation/', views.ConversationList.as_view(), name='conversation_list'),
    path(r'^auth/', include('djoser.urls')),
    path(r'^auth/', include('djoser.urls.authtoken')),

]