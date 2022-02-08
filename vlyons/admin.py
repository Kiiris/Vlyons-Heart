

# Register your models here.
# from .models import Message, User, Conversation

# class AccountAdmin(UserAdmin):
#   list_display = ('email', 'username', 'date_joined', 'last_login', 'is_admin', 'is_staff', )
#   search_field = ('email', 'username')
#   readonly_fields = ('id', 'date_joined', 'last_login',)

#   filter_horizontal = ()
#   list_filter = ()
#   fieldsets = ()
from django import forms
from django.contrib import admin
from django import forms
from django.forms import TextInput, Textarea, CharField
from django.contrib.auth.admin import UserAdmin

# from django.contrib import admin
# from django.contrib.auth.admin import UserAdmin

# from forms import CustomUserCreationForm, CustomUserChangeForm
from accounts.models import User


class CustomUserAdmin(UserAdmin):
    # add_form = CustomUserCreationForm
    # form = CustomUserChangeForm
    # model = CustomUser
    model = User
    search_fields = ('email', 'username', 'password')
    list_display = ('email', 'username', 'password', 'is_staff', 'is_active',)
    list_filter = ('email', 'username', 'password', 'is_staff', 'is_active',)
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'is_staff', 'is_active')}
        ),
    )
    search_fields = ('email',)
    ordering = ('email',)


# admin.site.register(CustomUser, CustomUserAdmin)
# class UserAdminConfig(UserAdmin):
#     form = UserChangeForm
#     add_form = UserCreationForm

#     list_display = ('email', 'username', 'is_admin')
#     list_filter = ('is_admin',)
#     fieldsets = (
#         (None, {'fields': ('email', 'password')}),
#         ('Personal info', {'fields': ('username',)}),
#         ('Permissions', {'fields': ('is_admin',)}),
#     )
#     add_fieldsets = (
#         (None, {
#             'classes': ('wide',),
#             'fields': ('email', 'username', 'password1', 'password2'),
#         }),
#     )
#     search_fields = ('email',)
#     ordering = ('email',)
#     filter_horizontal = ()

# admin.site.register(User, UserAdmin)
# admin.site.register(User)
