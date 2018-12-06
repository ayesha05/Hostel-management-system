from .models import Hostel, Room, Furniture, Student, Fee, Visitor, Mess, Mess_employee
from django.shortcuts import render
from django.db.models import Sum


def index(request):
    total_student = Student.objects.count()
    total_seat = Hostel.objects.aggregate(total_seat=Sum('no_of_seat'))
    availabe_seat = total_seat['total_seat'] - total_student
    total_employee = Mess_employee.objects.count()
    context = {
            'total_student': total_student,
            'availabe_seat': availabe_seat,
            'total_employee': total_employee
    }
    return render(request, 'hostel/dashboard.html', context)


def student_table(request):
    students = Student.objects.all()
    context = {
            'students': students,
    }
    return render(request, 'hostel/student_table.html', context)


def seat(request):
    rooms = Room.objects.all()
    context = {
            'rooms': rooms,
    }
    return render(request, 'hostel/seat.html', context)


def employee(request):
    employees = Mess_employee.objects.all()
    context = {
            'employees': employees,
    }
    return render(request, 'hostel/employee.html', context)


def flot(request):
    return render(request, 'hostel/flot.html')


def morris(request):
    return render(request, 'hostel/morris.html')


def forms(request):
    return render(request, 'hostel/forms.html')


def panels_wells(request):
    return render(request, 'hostel/panels_wells.html')


def buttons(request):
    return render(request, 'hostel/buttons.html')


def notifications(request):
    return render(request, 'hostel/notifications.html')


def typography(request):
    return render(request, 'hostel/typography.html')


def icons(request):
    return render(request, 'hostel/icons.html')


def grid(request):
    return render(request, 'hostel/grid.html')


def blank(request):
    return render(request, 'hostel/blank.html')


def login(request):
    return render(request, 'hostel/login.html')
