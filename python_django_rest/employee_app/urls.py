# from django.conf.urls import re_path
#from django.urls import re_path
from django.urls import path

from django.conf import settings
from django.conf.urls.static import static

from employee_app import views

urlpatterns = [
    # re_path(r'department/$', views.departmentApi),
    # re_path(r'department/([0-9]+)$', views.departmentApi),
    # re_path(r'department/$', views.departmentApi),
    path('department/', views.departmentApi),
    path('department/<int:id>/', views.departmentApi),

    path('employee/', views.employeeApi),
    path('employee/<int:id>/', views.employeeApi),

    path('savefile/', views.saveFileApi),
 
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# GET http://127.0.0.1:8000/department/   raw and JSON
# POST http://127.0.0.1:8000/department/    {"DepartmentName" : "HR"}
# PUT http://127.0.0.1:8000/department/    {"DepartmentId" : 2, "DepartmentName" : "HR-2"}
# DELETE http://127.0.0.1:8000/department/2/

# POST http://127.0.0.1:8000/savefile/   form-data, key = 'uploadedFile', format = 'File', value = selected file
