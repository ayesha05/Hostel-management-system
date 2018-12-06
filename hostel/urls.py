from django.urls import path
from . import views

app_name = 'hostel'

urlpatterns = [
    path('', views.index, name='index'),
    path('student_table', views.student_table, name='student_table'),
    path('seat', views.seat, name='seat'),
    path('employee', views.employee, name='employee'),
    path('flot', views.flot, name='flot'),
    path('morris', views.morris, name='morris'),
    path('forms', views.forms, name='forms'),
    path('panels_wells', views.panels_wells, name='panels_wells'),
    path('buttons', views.buttons, name='buttons'),
    path('notifications', views.notifications, name='notifications'),
    path('typography', views.typography, name='typography'),
    path('icons', views.icons, name='icons'),
    path('grid', views.grid, name='grid'),
    path('blank', views.blank, name='blank'),
    path('login', views.login, name='login'),
]
