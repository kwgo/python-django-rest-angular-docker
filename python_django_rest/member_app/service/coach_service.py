from member_app.models import Coaches

class CoachService:
#    def __init__(self, repo=None):
#        self.repo = repo or DefaultCoachRepository()

    def get_all_coaches(self):
        try:
            coachs = Coaches.objects.all()
            return coachs
        except Exception as e:
            return None, str(e)
        
    def add_coach(self, coach):
        try:
            # Perform any extra business logic here
            coach.full_clean()  # optional: validate model instance fields
            coach.save()
            return True, None
        except Exception as e:
            return False, str(e)

    def get_coach(self, coach_id):
        return Coaches.objects.get(CoachId=coach_id)

    def update_coach(self, coach):
        try:
            # Validate model fields (optional)
            coach.full_clean()
            # Save updated instance
            coach.save()
            return True, None
        except Exception as e:
            return False, str(e)

    def delete_coach(self, coach):
        try:
            coach.delete()
            return True, None
        except Exception as e:
            return False, str(e)

