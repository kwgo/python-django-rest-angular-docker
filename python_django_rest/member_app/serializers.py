from rest_framework import serializers
from member_app.models import Coaches, Members

class CoachSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coaches
        fields = ('CoachId', 'CoachName')

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Members
        fields = ('MemberId', 'MemberName', 'Coach', 'DateOfJoin', 'PhotoFileName')