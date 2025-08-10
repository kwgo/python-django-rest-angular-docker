from member_app.models import Members

class MemberService:
#    def __init__(self, repo=None):
#        self.repo = repo or DefaultMemberRepository()
    def get_all_members(self):
        try:
            members = Members.objects.all()
            return members
        except Exception as e:
            return None, str(e)
        
    def add_member(self, member):
        try:
            # Perform any extra business logic here
            member.full_clean()  # optional: validate model instance fields
            member.save()
            return True, None
        except Exception as e:
            return False, str(e)

    def get_member(self, member_id):
        return Members.objects.get(MemberId=member_id)

    def update_member(self, member):
        try:
            # Validate model fields (optional)
            member.full_clean()
            # Save updated instance
            member.save()
            return True, None
        except Exception as e:
            return False, str(e)

    def delete_member(self, member):
        try:
            member.delete()
            return True, None
        except Exception as e:
            return False, str(e)

