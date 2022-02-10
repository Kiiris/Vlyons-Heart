# Generated by Django 4.0.2 on 2022-02-10 12:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vlyons', '0002_remove_conversation_created_at_conversation_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='conversation',
            name='participant',
            field=models.ManyToManyField(related_name='user', to='vlyons.User'),
        ),
        migrations.AlterField(
            model_name='message',
            name='date',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
