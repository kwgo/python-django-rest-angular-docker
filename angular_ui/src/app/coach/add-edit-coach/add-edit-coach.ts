import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedService } from '../../service/shared.service'

@Component({
  selector: 'app-add-edit-coach',
  imports: [FormsModule],
  templateUrl: './add-edit-coach.html',
  styleUrl: './add-edit-coach.css'
})
export class AddEditCoach implements OnInit {
  constructor(private sharedService:SharedService) {}

  @Input() coach: any;
  
  coachId: string =  "0";
  coachName:string = "";

  ngOnInit() {
    this.coachId = this.coach.CoachId;
    this.coachName = this.coach.CoachName;
  }

  addCoach() {
    var coach = {
      CoachId : this.coachId,
      CoachName : this.coachName
    };
    this.sharedService.addCoach(coach).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateCoach() {
    var coach = {
      CoachId : this.coachId,
      CoachName : this.coachName
    };
    this.sharedService.updateCoach(coach).subscribe(res=>{
      alert(res.toString());
    });
  }

}
