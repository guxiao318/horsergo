# Generated by Django 3.0.8 on 2020-07-17 07:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('horsequick', '0008_interface_info_created_person'),
    ]

    operations = [
        migrations.RenameField(
            model_name='interface_info',
            old_name='assert_filed_list',
            new_name='assert_field_list',
        ),
        migrations.RenameField(
            model_name='interface_info',
            old_name='input_fileld_list',
            new_name='input_field_list',
        ),
    ]
