from rest_framework import serializers
from .models import Student, Course
from  django.contrib.auth.hashers import make_password, check_password

class CourseSerializer(serializers.ModelSerializer):
   
    class Meta:
        model = Course
        fields = ['id', 'course_name', 'instructor_name', 'student_id']
   


class StudentSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Student
        fields = ['id', 'first_name', 'email', 'course']

    course = CourseSerializer(many=True)
    
   

   
  
    
    
    