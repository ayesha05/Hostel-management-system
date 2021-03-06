# Generated by Django 2.1.3 on 2018-11-19 10:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Fee',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fee_month', models.CharField(max_length=200)),
                ('fee_status', models.CharField(max_length=200)),
                ('is_paid', models.BooleanField(default=False)),
                ('paid_date', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='Furniture',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('furniture_id', models.CharField(max_length=200)),
                ('furniture_type', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Hostel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('building_no', models.CharField(max_length=200)),
                ('no_of_rooms', models.CharField(max_length=200)),
                ('no_of_students', models.CharField(max_length=200)),
                ('annual_expenses', models.IntegerField(default=0)),
                ('location', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Mess',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mess_incharge', models.CharField(max_length=200)),
                ('montly_expenses', models.IntegerField(default=0)),
                ('mess_timing', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='Mess_employee',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('emp_id', models.CharField(max_length=200)),
                ('emp_name', models.CharField(max_length=200)),
                ('emp_salary', models.CharField(max_length=200)),
                ('phone', models.CharField(max_length=200)),
                ('address', models.CharField(max_length=200)),
                ('hostel', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hostel.Hostel')),
            ],
        ),
        migrations.CreateModel(
            name='Room',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('room_id', models.CharField(max_length=200)),
                ('capacity', models.CharField(max_length=200)),
                ('is_available', models.BooleanField(default=False)),
                ('hostel', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hostel.Hostel')),
            ],
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('student_id', models.CharField(max_length=200)),
                ('student_name', models.CharField(max_length=200)),
                ('father_name', models.CharField(max_length=200)),
                ('department', models.CharField(max_length=200)),
                ('phone_no', models.CharField(max_length=200)),
                ('age', models.CharField(max_length=200)),
                ('dob', models.DateField()),
                ('building_num', models.CharField(max_length=200)),
                ('hostel', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hostel.Hostel')),
                ('room', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hostel.Room')),
            ],
        ),
        migrations.CreateModel(
            name='Visitor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('visitor_name', models.CharField(max_length=200)),
                ('time_in', models.DateField()),
                ('time_out', models.DateField()),
                ('student_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hostel.Student')),
            ],
        ),
        migrations.AddField(
            model_name='furniture',
            name='room_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hostel.Room'),
        ),
        migrations.AddField(
            model_name='fee',
            name='student_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hostel.Student'),
        ),
    ]
