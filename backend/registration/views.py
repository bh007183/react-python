from django.shortcuts import get_object_or_404
from django.http import HttpResponse
from .models import Course
from .models import Student
from rest_framework.filters import SearchFilter
from .serializers import *

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from  django.contrib.auth.hashers import make_password, check_password
from rest_framework.permissions import IsAuthenticated


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

class StudentViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    
    @api_view(["GET", "POST"])   
    def student_create(request):
        # hashpassword
        print(request.data)
        serializer = StudentSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response("ok")

    @api_view(["GET", "POST"])  
    def me(request):
        student = Course.objects.select_related('student_id').get(id=1)
        
        serializer = CourseSerializer(student)
      
        print(serializer.data)

        return Response(serializer.data)



  
    






