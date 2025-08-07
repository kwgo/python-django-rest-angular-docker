# from django.conf.urls import re_path
#from django.urls import re_path
from django.urls import path

from django.conf import settings
from django.conf.urls.static import static

from member_app import views

urlpatterns = [
    # re_path(r'coach/$', views.coachApi),
    # re_path(r'coach/([0-9]+)$', views.coachApi),
    # re_path(r'coach/$', views.coachApi),
    path('coach/', views.coachApi),
    path('coach/<int:id>/', views.coachApi),

    path('member/', views.memberApi),
    path('member/<int:id>/', views.memberApi),

    path('savefile/', views.saveFileApi),
 
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# GET http://127.0.0.1:8000/coach/   raw and JSON
# POST http://127.0.0.1:8000/coach/    {"CoachName" : "HR"}
# PUT http://127.0.0.1:8000/coach/    {"CoachId" : 2, "CoachName" : "HR-2"}
# DELETE http://127.0.0.1:8000/coach/2/

# POST http://127.0.0.1:8000/savefile/   form-data, key = 'uploadedFile', format = 'File', value = selected file
