# Generated by Django 3.2.8 on 2021-10-29 18:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0004_student_email'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='student',
            name='password',
        ),
    ]
