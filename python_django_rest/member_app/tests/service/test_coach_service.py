from django.test import TestCase
import unittest
from member_app.models import Coaches
from member_app.service.coach_service import CoachService

# py manage.py test member_app.tests.service.coach_service_test
class CoachServiceTests(TestCase):
    def setUp(self):
        # Create a sample coach instance for testing
        self.coach = Coaches.objects.create(
            CoachId=1,
            CoachName="John Doe"
        )
        self.service = CoachService()

    @unittest.skip("Skipping this method for now")
    def get_coach_by_name(coach_name):
        coaches = self.service.get_all_coaches()
        for coach in coaches:
            if(coach.CoachName == coach_name):
                return coach
        return None


    def test_get_all_coaches(self):
       self.assertIsNotNone(self.get_coach_by_name(self.coach.CoachName))

    def test_get_coach_success(self):
        coach, error = self.service.get_coach(self.coach.CoachId)
        self.assertIsNone(error)
        self.assertEqual(coach.CoachId, self.coach.CoachId)

    def test_get_coach_not_found(self):
        coach, error = self.service.get_coach(999)  # non-existing ID
        self.assertFalse(coach)
        self.assertIsNotNone(error)

    def test_add_coach(self):
        new_coach = Coaches(
            CoachId=2,
            CoachName="Jane Smith"
        )
        success, error = self.service.add_coach(new_coach)
        self.assertTrue(success)
        self.assertIsNone(error)
        self.assertTrue(Coaches.objects.filter(CoachId=2).exists())

    def test_update_coach(self):
        updated_data = {'full_name': 'John Updated'}
        coach = self.get_coach_by_name(self.coach.CoachName)
        success, error = self.service.update_coach(self.coach, updated_data)
        self.assertTrue(success)
        self.assertIsNone(error)
        self.coach.refresh_from_db()
        self.assertEqual(self.coach.full_name, 'John Updated')

    def test_delete_coach(self):
        success, error = self.service.delete_coach(self.coach)
        self.assertTrue(success)
        self.assertIsNone(error)
        self.assertFalse(Coaches.objects.filter(CoachId=self.coach.CoachId).exists())