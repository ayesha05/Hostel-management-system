from django.db import models


class Hostel(models.Model):
    building_name = models.CharField(max_length=200)
    no_of_rooms = models.IntegerField(default=0)
    no_of_seat = models.IntegerField(default=0)
    annual_expenses = models.IntegerField(default=0)
    location = models.CharField(max_length=200)

    def __str__(self):
        return self.building_name


class Room(models.Model):
    hostel = models.ForeignKey(Hostel, on_delete=models.CASCADE)
    room_id = models.CharField(max_length=200)
    capacity = models.IntegerField(default=0)
    is_available = models.BooleanField(default=False)

    def __str__(self):
        return self.room_id


class Furniture(models.Model):
    room_id = models.ForeignKey(Room, on_delete=models.CASCADE)
    furniture_id = models.CharField(max_length=200)
    furniture_type = models.CharField(max_length=200)

    def __str__(self):
        return self.furniture_id


class Student(models.Model):
    hostel = models.ForeignKey(Hostel, on_delete=models.CASCADE)
    student_id = models.CharField(max_length=200)
    student_name = models.CharField(max_length=200)
    father_name = models.CharField(max_length=200)
    department = models.CharField(max_length=200)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    phone_no = models.CharField(max_length=200)
    age = models.CharField(max_length=200)
    dob = models.DateField()
    building_num = models.CharField(max_length=200)

    def __str__(self):
        return self.student_id


class Fee(models.Model):
    fee_month = models.CharField(max_length=200)
    fee_status = models.CharField(max_length=200)
    is_paid = models.BooleanField(default=False)
    paid_date = models.DateField()
    student_id = models.ForeignKey(Student, on_delete=models.CASCADE)

    def __str__(self):
        return self.fee_month


class Visitor(models.Model):
    student_id = models.ForeignKey(Student, on_delete=models.CASCADE)
    visitor_name = models.CharField(max_length=200)
    time_in = models.DateField()
    time_out = models.DateField()

    def __str__(self):
        return self.visitor_name


class Mess(models.Model):
    mess_incharge = models.CharField(max_length=200)
    montly_expenses = models.IntegerField(default=0)
    mess_timing = models.IntegerField(default=0)

    def __str__(self):
        return self.mess_incharge


class Mess_employee(models.Model):
    emp_id = models.CharField(max_length=200)
    emp_name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    emp_salary = models.CharField(max_length=200)
    phone = models.CharField(max_length=200)
    hostel = models.ForeignKey(Hostel, on_delete=models.CASCADE)

    def __str__(self):
        return self.emp_id
