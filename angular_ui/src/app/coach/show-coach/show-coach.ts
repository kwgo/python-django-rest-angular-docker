import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

//import { NgFor } from '@angular/common'; // Import NgFor specifically

import { Shared } from '../../service/shared'
import { AddEditCoach } from '../add-edit-coach/add-edit-coach';

@Component({
  selector: 'app-show-coach',
  // imports: [NgFor],
  imports: [FormsModule, AddEditCoach],
  templateUrl: './show-coach.html',
  styleUrl: './show-coach.css'
})
export class ShowCoach implements OnInit {
  coaches: any = [];

  coach: any;

  activateAddEditCoach: boolean = false;
  modalTitle: string = "";

  coachIdFilter: string = "";
  coachNameFilter: string = "";
  coachesOrigin: any = [];

  constructor(private shared: Shared) {

  }

  ngOnInit(): void {
    console.log("show-departemnt init start ----");
    this.getCoaches();
  }

  getCoaches() {
    this.shared.getCoaches().subscribe(data => {
      console.log("Shared service getCoaches() start ---");
      this.coaches = data;
      this.coachesOrigin = data;
      console.log(data);
    }
    );
  }

  addCoach() {
    this.coach = {
      CoachId: 0,
      CoachName: ""
    }
    this.modalTitle = "Add Coach";
    this.activateAddEditCoach = true;
  }

  updateCoach(coach: any) {
    this.addCoach();
    console.log("start edit ....");
    console.log(coach);
    this.coach = coach;

    console.log("start edit ....22 33 44");
    this.modalTitle = "Edit Coach";
    this.activateAddEditCoach = true;
  }

  deleteCoach(coach: any) {
    if (confirm('Are you sure??')) {
      this.shared.deleteCoach(coach.CoachId).subscribe(data => {
        alert(data.toString());
        this.getCoaches();
      });
    }
  }

  closeAddEditCoachDialog() {
    this.activateAddEditCoach = false;
    this.getCoaches();
  }

  filterCoach() {
    var coachIdFilter = this.coachIdFilter;
    var coachNameFilter = this.coachNameFilter;

    this.coaches = this.coachesOrigin.filter(
      function (coach: any) {
        return coach.CoachId.toString().toLowerCase().includes(coachIdFilter.toString().toLowerCase().trim())
          && coach.CoachName.toString().toLowerCase().includes(coachNameFilter.toString().toLowerCase().trim());
      }
    );
  }

  sortCoach(prop: any, asc: boolean) {
    this.coaches = this.coachesOrigin.sort(
      function (coach1: any, coach2: any) {
        if (asc) {
          return (coach1[prop] > coach2[prop]) ? 1 : ((coach1[prop] < coach2[prop]) ? -1 : 0);
        } else {
          return (coach2[prop] > coach1[prop]) ? 1 : ((coach2[prop] < coach1[prop]) ? -1 : 0);
        }
      });

  }

}
