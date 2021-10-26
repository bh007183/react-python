from django.db import models

# Create your models here.
class Student(models.Model):
    first_name = models.CharField(max_length=200)
    email = models.EmailField
    password = models.CharField(max_length = 100)

class Course(models.Model):
    course_name = models.CharField(max_length=200)
    instructor_name = models.CharField(max_length=200)
    student_id = models.ForeignKey(Student, on_delete=models.CASCADE, null=True, blank=True)
