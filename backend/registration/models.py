from django.db import models

# Create your models here.
class Student(models.Model):
    id = models.IntegerField(primary_key=True)
    first_name = models.CharField(max_length=200)
    email = models.EmailField(unique=True, null=False, blank=False)
    
    

class Course(models.Model):
   
    course_name = models.CharField(max_length=200)
    instructor_name = models.CharField(max_length=200)
    student_id = models.ForeignKey(Student, on_delete=models.CASCADE, null=True, blank=True)
