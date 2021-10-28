from django.shortcuts import get_object_or_404
from django.http import HttpResponse
from .models import Course
from .models import Student
from rest_framework.filters import SearchFilter
from .serializers import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from  django.contrib.auth.hashers import make_password, check_password


def index(request):
    return HttpResponse("Hello, Your in the registation index")

# Create your views here.
@api_view()
def class_id(request, id):
        course = get_object_or_404(Course, pk=id)
        serializer = CourseSerializer(course)
        return Response(serializer.data)

@api_view()     
def class_all(request):
    queryset = Course.objects.all()
    serializer = CourseSerializer(queryset, many=True)
    return Response(serializer.data)

@api_view(["GET", "POST"])   
def student_create(request):
    # hashpassword
   request.data['password'] = make_password(request.data['password'])
   serializer = StudentSerializer(data=request.data)
   
   serializer.is_valid(raise_exception=True)
   serializer.save()
   
   return Response("ok")

@api_view(["GET", "POST"]) 
def student_login(req):
    print(req.data['email'])
    student = Student.objects.get(email=req.data['email'])
    serializer = StudentSerializer(student)
    if check_password(req.data['password'], serializer.data['password']) == True:
        print(check_password(req.data['password'], serializer.data['password']))
        return Response("ok")
     
    return Response("errr")
    






