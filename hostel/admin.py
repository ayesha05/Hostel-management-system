from django.contrib import admin

from .models import Hostel, Room, Furniture, Student, Fee, Visitor, Mess, Mess_employee

admin.site.register(Hostel)
admin.site.register(Room)
admin.site.register(Furniture)
admin.site.register(Student)
admin.site.register(Fee)
admin.site.register(Visitor)
admin.site.register(Mess)
admin.site.register(Mess_employee)
