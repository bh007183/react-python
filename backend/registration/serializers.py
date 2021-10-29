from rest_framework import serializers
from .models import *
from  django.contrib.auth.hashers import make_password, check_password

class CourseSerializer(serializers.ModelSerializer):
   
    class Meta:
        model = Course
        fields = ['course_name', 'instructor_name']
   


class StudentSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Student
        fields = ['id', 'first_name', 'email', 'course']
    course = CourseSerializer()
   

   
  
    
    
    