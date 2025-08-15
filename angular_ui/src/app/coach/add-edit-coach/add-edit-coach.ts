import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Shared } from '../../service/shared.service'

@Component({
  selector: 'app-add-edit-coach',
  imports: [FormsModule],
  templateUrl: './add-edit-coach.html',
  styleUrl: './add-edit-coach.css'
})
export class AddEditCoach implements OnInit {
  constructor(private shared:Shared) {}

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
    this.shared.addCoach(coach).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateCoach() {
    var coach = {
      CoachId : this.coachId,
      CoachName : this.coachName
    };
    this.shared.updateCoach(coach).subscribe(res=>{
      alert(res.toString());
    });
  }

}
