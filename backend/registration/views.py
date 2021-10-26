from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, Your in the registation index")

# Create your views here.
