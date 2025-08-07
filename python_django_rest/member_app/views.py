from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.core.files.storage import default_storage

from member_app.models import Coaches, Members
from member_app.serializers import CoachSerializer, MemberSerializer

# Create your views here.
@csrf_exempt
def coachApi(request, id=0):
    if request.method == "GET":
        coaches = Coaches.objects.all()
        coach_serializer = CoachSerializer(coaches, many=True)
        return JsonResponse(coach_serializer.data, safe=False)
    
    elif request.method == "POST":
        coach_data = JSONParser().parse(request)
        print(coach_data)

        coach_serializer = CoachSerializer(data = coach_data)
        if coach_serializer.is_valid():
            coach_serializer.save()
            return JsonResponse('Added Successfully!!', safe=False)
        return JsonResponse('Failed to add!!', safe=False)

    elif request.method == "PUT":
        coach_data = JSONParser().parse(request)
        coach = Coaches.objects.get(CoachId=coach_data['CoachId'])
        coach_serializer = CoachSerializer(coach, data = coach_data)
        if coach_serializer.is_valid():
            coach_serializer.save()
            return JsonResponse('Updated Successfully!!', safe=False)
        return JsonResponse('Failed to update!!', safe=False)

    elif request.method == "DELETE":
        coach = Coaches.objects.get(CoachId=id)
        coach.delete()
        return JsonResponse('Deleted Successfully!!', safe=False)

@csrf_exempt
def memberApi(request, id=0):
    if request.method == "GET":
        members = Members.objects.all()
        member_serializer = MemberSerializer(members, many=True)
        return JsonResponse(member_serializer.data, safe=False)
    
    elif request.method == "POST":
        member_data = JSONParser().parse(request)
        member_serializer = MemberSerializer(data = member_data)
        print(member_serializer.is_valid())
        if not member_serializer.is_valid():
            print(member_serializer.errors)
        if member_serializer.is_valid():
            member_serializer.save()
            return JsonResponse('Added Successfully!!', safe=False)
        return JsonResponse('Failed to add!!', safe=False)

    elif request.method == "PUT":
        member_data = JSONParser().parse(request)
        print("========= 1 ==========")
        print(member_data)
        print(member_data['MemberId'])
        member = Members.objects.get(MemberId=member_data['MemberId'])
        print("========= 2 ==========")
        member_serializer = MemberSerializer(member, data = member_data)
        print(member_serializer)
        print("========= 3 ==========")
        if not member_serializer.is_valid():
            print(member_serializer.errors)
        if member_serializer.is_valid():
            member_serializer.save()
            return JsonResponse('Updated Successfully!!', safe=False)
        return JsonResponse('Failed to update!!', safe=False)

    elif request.method == "DELETE":
        member = Members.objects.get(MemberId=id)
        member.delete()
        return JsonResponse('Deleted Successfully!!', safe=False)

@csrf_exempt
def saveFileApi(request):
    file = request.FILES['uploadedFile']
    file_name = default_storage.save(file.name, file)
    return JsonResponse(file_name, safe=False)

       



