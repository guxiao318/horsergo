# Generated by Django 3.0.8 on 2020-07-22 08:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('horsequick', '0013_interface_info_belong_category'),
    ]

    operations = [
        migrations.RenameField(
            model_name='category_info',
            old_name='Category_name',
            new_name='category_name',
        ),
    ]
