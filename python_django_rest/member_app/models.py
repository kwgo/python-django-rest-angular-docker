from django.db import models

# Create your models here.

class Coaches (models.Model) :
    CoachId = models.AutoField(primary_key=True)
    CoachName = models.CharField(max_length=100)

class Members(models.Model):
    MemberId = models.AutoField(primary_key=True)
    MemberName = models.CharField(max_length=100)
    Coach = models.CharField(max_length=100)
    DateOfJoin = models.DateField()
    PhotoFileName = models.CharField(max_length=100)
