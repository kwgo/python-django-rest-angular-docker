from django.test import TestCase
from member_app.models import Members
from member_app.service.member_service import MemberService
from django.core.exceptions import ValidationError

class MemberServiceTests(TestCase):
    @classmethod
    def setUpTestData(cls):
        # Runs once for the whole test case
        cls.service = MemberService()
        cls.valid_member_data = {
            'MemberId': 1,
            'MemberName': 'John Doe',
            'DateOfJoin': '07/05/2001',
            'Coach': 'Liu'
        }
        cls.test_member = Members.objects.create(**cls.valid_member_data)

    def setUp(self):
        # Runs before each test method
        pass

    # Test get_all_members()
    def test_get_all_members_success(self):
        members, error = self.service.get_all_members()
        self.assertEqual(len(members), 1)
        self.assertEqual(members[0].MemberId, 1)
        self.assertIsNone(error)

    # Test get_member()
    def test_get_member_success(self):
        member, error = self.service.get_member(1)
        self.assertEqual(member.MemberId, 1)
        self.assertIsNone(error)

    def test_get_member_not_found(self):
        member, error = self.service.get_member(999)  # Non-existent ID
        self.assertIsNone(member)
        self.assertEqual(error, "Member not found")

    # Test add_member()
    def test_add_member_success(self):
        new_member = Members(
            MemberId=2,
            'MemberName': 'John Doe',
            'DateOfJoin': '07/05/2001',
            'Coach': 'Liu'
        )
        result, error = self.service.add_member(new_member)
        self.assertEqual(result.MemberId, 2)
        self.assertIsNone(error)
        self.assertEqual(Members.objects.count(), 2)

    # Test update_member()
    def test_update_member_success(self):
        self.test_member.MemberName = 'Updated'
        result, error = self.service.update_member(self.test_member)
        self.assertEqual(result.MemberName, 'Updated')
        self.assertIsNone(error)
        self.test_member.refresh_from_db()
        self.assertEqual(self.test_member.MemberName, 'Updated')

    # Test delete_member()
    def test_delete_member_success(self):
        result, error = self.service.delete_member(self.test_member)
        self.assertTrue(result)
        self.assertIsNone(error)
        self.assertEqual(Members.objects.count(), 0)

    def test_delete_member_failure(self):
        # Create a mock member that's not saved to test delete failure
        unsaved_member = Members(MemberId=999)
        result, error = self.service.delete_member(unsaved_member)
        self.assertFalse(result)
        self.assertIsInstance(error, str)

    # Test edge cases
    def test_get_all_members_empty(self):
        Members.objects.all().delete()
        members, error = self.service.get_all_members()
        self.assertEqual(len(members), 0)
        self.assertIsNone(error)

    def test_duplicate_member_id(self):
        duplicate_member = Members(**self.valid_member_data)
        result, error = self.service.add_member(duplicate_member)
        self.assertIsNone(result)
        self.assertIsInstance(error, str)