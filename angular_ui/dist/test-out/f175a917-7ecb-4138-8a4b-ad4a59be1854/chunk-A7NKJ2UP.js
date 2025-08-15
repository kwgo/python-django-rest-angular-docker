import {
  AddEditCoach,
  init_add_edit_coach
} from "./chunk-Z25BOWNM.js";
import {
  FormsModule,
  init_forms
} from "./chunk-6C6X67HY.js";
import {
  SharedService,
  init_shared_service
} from "./chunk-PSE4N3RH.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-DVWL2YKN.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\coach\show-coach\show-coach.html
var show_coach_default;
var init_show_coach = __esm({
  "angular:jit:template:src\\app\\coach\\show-coach\\show-coach.html"() {
    show_coach_default = `<!-- Button trigger modal -->\r
<button type="button" class="btn btn-primary float-right m-2" data-toggle="modal" data-target="#exampleModal"\r
    (click)="addCoach()" data-backdrop="static" data-keyboard="false">\r
    Add Coach\r
</button>\r
\r
<!-- Modal -->\r
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"\r
    aria-hidden="true">\r
    <div class="modal-dialog modal-dialog-centered modal-xl" role="document">\r
        <div class="modal-content">\r
            <div class="modal-header">\r
                <h5 class="modal-title" id="exampleModalLabel">{{ modalTitle }}</h5>\r
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"\r
                    (click)="closeAddEditCoachDialog()">\r
                    <span aria-hidden="true">&times;</span>\r
                </button>\r
            </div>\r
            <div class="modal-body">\r
                @if (activateAddEditCoach) {\r
                <app-add-edit-coach [coach]="coach"></app-add-edit-coach>\r
                }\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<table class="table table-striped">\r
    <thead>\r
        <tr>\r
            <th>\r
                <div class="d-flex flex-row">\r
                    <input [(ngModel)] = "coachIdFilter" class="form-control" (keyup)="filterCoach()" placeholder="Filter">\r
                </div>\r
                Coach Id\r
                <button type="button" class="btn btn-outline" (click)="sortCoach('CoachId', true)">\r
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">\r
                        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>\r
                    </svg>\r
                </button>\r
                <button type="button" class="btn btn-outline" (click)="sortCoach('CoachId', false)">\r
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\r
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>\r
                    </svg>\r
                </button>\r
            </th>\r
            <th>\r
                <div class="d-flex flex-row">\r
                    <input [(ngModel)] = "coachNameFilter" class="form-control" (keyup)="filterCoach()" placeholder="Filter">\r
                </div>\r
                Coach Name\r
                <button type="button" class="btn btn-outline" (click)="sortCoach('CoachName', true)">\r
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">\r
                        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>\r
                    </svg>\r
                </button>\r
                <button type="button" class="btn btn-outline" (click)="sortCoach('CoachName', false)">\r
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\r
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>\r
                    </svg>\r
                </button>\r
            </th>\r
            <th>Options</th>\r
        </tr>\r
    </thead>\r
    <tbody>\r
        @for (coach of coaches; track coach.CoachId) {\r
        <tr>\r
            <td>{{ coach.CoachId }}</td>\r
            <td>{{ coach.CoachName }}</td>\r
            <td>\r
                <button type="button" class="btn btn-light mr-1" data-toggle="modal" data-target="#exampleModal"\r
                    (click)="updateCoach(coach)" data-backdrop="static" data-keyboard="false">\r
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">\r
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>\r
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>\r
                        </svg>\r
                </button>\r
                <button type="button" class="btn btn-light mr-1" (click)="deleteCoach(coach)">\r
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">\r
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>\r
                    </svg>\r
                </button>\r
            </td>\r
        </tr>\r
        } @empty {\r
        <tr>\r
            <td colspan="3">No items found.</td>\r
        </tr>\r
        }\r
        <!--\r
        <tr *ngFor="let coach of coaches">\r
            <td>{{ coach.CoachId }}</td>\r
            <td>{{ coach.CoachName }}</td>\r
            <td></td>\r
        </tr>\r
-->\r
    </tbody>\r
</table>`;
  }
});

// angular:jit:style:src\app\coach\show-coach\show-coach.css
var show_coach_default2;
var init_show_coach2 = __esm({
  "angular:jit:style:src\\app\\coach\\show-coach\\show-coach.css"() {
    show_coach_default2 = "/* src/app/coach/show-coach/show-coach.css */\n/*# sourceMappingURL=show-coach.css.map */\n";
  }
});

// src/app/coach/show-coach/show-coach.ts
var ShowCoach;
var init_show_coach3 = __esm({
  "src/app/coach/show-coach/show-coach.ts"() {
    "use strict";
    init_tslib_es6();
    init_show_coach();
    init_show_coach2();
    init_core();
    init_forms();
    init_shared_service();
    init_add_edit_coach();
    ShowCoach = class ShowCoach2 {
      sharedService;
      coaches = [];
      coach;
      activateAddEditCoach = false;
      modalTitle = "";
      coachIdFilter = "";
      coachNameFilter = "";
      coachesOrigin = [];
      constructor(sharedService) {
        this.sharedService = sharedService;
      }
      ngOnInit() {
        console.log("show-departemnt init start ----");
        this.getCoaches();
      }
      getCoaches() {
        this.sharedService.getCoaches().subscribe((data) => {
          console.log("Shared service getCoaches() start ---");
          this.coaches = data;
          this.coachesOrigin = data;
          console.log(data);
        });
      }
      addCoach() {
        this.coach = {
          CoachId: 0,
          CoachName: ""
        };
        this.modalTitle = "Add Coach";
        this.activateAddEditCoach = true;
      }
      updateCoach(coach) {
        this.addCoach();
        console.log("start edit ....");
        console.log(coach);
        this.coach = coach;
        console.log("start edit ....22 33 44");
        this.modalTitle = "Edit Coach";
        this.activateAddEditCoach = true;
      }
      deleteCoach(coach) {
        if (confirm("Are you sure??")) {
          this.sharedService.deleteCoach(coach.CoachId).subscribe((data) => {
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
        this.coaches = this.coachesOrigin.filter(function(coach) {
          return coach.CoachId.toString().toLowerCase().includes(coachIdFilter.toString().toLowerCase().trim()) && coach.CoachName.toString().toLowerCase().includes(coachNameFilter.toString().toLowerCase().trim());
        });
      }
      sortCoach(prop, asc) {
        this.coaches = this.coachesOrigin.sort(function(coach1, coach2) {
          if (asc) {
            return coach1[prop] > coach2[prop] ? 1 : coach1[prop] < coach2[prop] ? -1 : 0;
          } else {
            return coach2[prop] > coach1[prop] ? 1 : coach2[prop] < coach1[prop] ? -1 : 0;
          }
        });
      }
      static ctorParameters = () => [
        { type: SharedService }
      ];
    };
    ShowCoach = __decorate([
      Component({
        selector: "app-show-coach",
        // imports: [NgFor],
        imports: [FormsModule, AddEditCoach],
        template: show_coach_default,
        styles: [show_coach_default2]
      })
    ], ShowCoach);
  }
});

export {
  ShowCoach,
  init_show_coach3 as init_show_coach
};
//# sourceMappingURL=chunk-A7NKJ2UP.js.map
