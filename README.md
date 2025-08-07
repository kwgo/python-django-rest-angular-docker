Do# python-django-rest-angular-docker
The demo project with Python, DJango, REST, Angular-20 and Docker


Env setup:
1) Download and install Node JS (10.9.3)
2) Install Angular: npm install -g @angular/cli  (20.1.4)
3) Download and install Python (Python 3.13.5)
4) Create Virsual enviornment and install packages:
    py -m venv myenv
    myenv\Scripts\activate
    pip install django
    pip install djangorestframework
    pip install django-cors-headers

Start server:
1) py manage.py runserver (under python_django_rest folder)
2) ng serve –open (under angula_ui folder)

Docker build and run:
1) docker compose up --build (under python_django_rest and angula_ui folder)
2) docker compose up --build (under root folder)

Angular server URL:
http://localhost:4200/

Rest api server URL:
http://localhost:8000/
