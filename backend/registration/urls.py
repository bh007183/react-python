from django.urls import path
from . import views
urlpatterns = [
    path('', views.index, name="index"),
    path('api/course/<int:id>/', views.class_id, name="class_id"),
    path('api/course/', views.class_all, name="class_all"),
    path('api/student/', views.student_create, name="student_create"),
    path('api/student/login', views.student_login, name="student_login"),
    
]