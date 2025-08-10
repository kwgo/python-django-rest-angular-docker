from django.test import TestCase
from rest_framework.test import APIClient
from member_app.models import Coaches, Members
import json

class CoachApiTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.coach_data = {
            "CoachId": 1,
            "CoachName": "John Doe"
        }
        self.coach = Coaches.objects.create(**self.coach_data)

    def test_get_all_coaches(self):
        response = self.client.get('/coach/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json()), 1)

    def test_get_single_coach(self):
        response = self.client.get(f'/coach/{self.coach.CoachId}/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()['FirstName'], "John")

    def test_get_nonexistent_coach(self):
        response = self.client.get('/coach/999/')
        self.assertEqual(response.status_code, 404)

    def test_create_coach(self):
        new_coach = {
            "CoachId": 2,
            "CoachName": "Jane Smith"
        }
        response = self.client.post(
            '/coach/',
            data=json.dumps(new_coach),
            content_type='application/json'
        )
        self.assertEqual(response.status_code, 200)
        self.assertEqual(Coaches.objects.count(), 2)

    def test_update_coach(self):
        updated_data = self.coach_data.copy()
        updated_data["CoachName"] = "Johnny Li"
        response = self.client.put(
            '/coach/',
            data=json.dumps(updated_data),
            content_type='application/json'
        )
        self.assertEqual(response.status_code, 200)
        self.coach.refresh_from_db()
        self.assertEqual(self.coach.FirstName, "Johnny")

    def test_delete_coach(self):
        response = self.client.delete(f'/coach/{self.coach.CoachId}/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(Coaches.objects.count(), 0)


class MemberApiTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.member_data = {
            "MemberId": 1,
            "MemberName": "Alice Johnson",
            "DateOfJoin": "02/02/2202",
            "Coach": "Johnny"
        }
        self.member = Members.objects.create(**self.member_data)

    def test_get_all_members(self):
        response = self.client.get('/member/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json()), 1)

    def test_get_single_member(self):
        response = self.client.get(f'/member/{self.member.MemberId}/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()['FirstName'], "Alice")

    def test_create_member(self):
        new_member = {
            "MemberId": 2,
            "MemeberName": "Bob Brown",
            "DateOgJoin": "09/08/2000",
            "Coach": "Test"
        }
        response = self.client.post(
            '/member/',
            data=json.dumps(new_member),
            content_type='application/json'
        )
        self.assertEqual(response.status_code, 200)
        self.assertEqual(Members.objects.count(), 2)

    def test_update_member(self):
        updated_data = self.member_data.copy()
        updated_data["MemberName"] = "Alicia Angel"
        response = self.client.put(
            '/member/',
            data=json.dumps(updated_data),
            content_type='application/json'
        )
        self.assertEqual(response.status_code, 200)
        self.member.refresh_from_db()
        self.assertEqual(self.member.MemberName, "Alicia Angel")

    def test_delete_member(self):
        response = self.client.delete(f'/member/{self.member.MemberId}/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(Members.objects.count(), 0)