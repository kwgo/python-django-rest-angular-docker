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
  Input,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-DVWL2YKN.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\coach\add-edit-coach\add-edit-coach.html
var add_edit_coach_default;
var init_add_edit_coach = __esm({
  "angular:jit:template:src\\app\\coach\\add-edit-coach\\add-edit-coach.html"() {
    add_edit_coach_default = '<div class="form-froup row">\r\n    <label class="col-sm-2 col-form-label">Coach Name</label>\r\n    <div class="col-sm-10">\r\n        <input type="input" class="form-control" [(ngModel)] = "coachName"\r\n        placeholder="Enter coach name">\r\n    </div>\r\n</div>\r\n\r\n@if(coach.CoachId==0) {\r\n    <button type="button" (click)="addCoach()" class="btn btn-primary">Add</button>\r\n}\r\n\r\n@if(coach.CoachId!=0) {\r\n    <button type="button" (click)="updateCoach()" class="btn btn-primary">Edit</button>\r\n}\r\n';
  }
});

// angular:jit:style:src\app\coach\add-edit-coach\add-edit-coach.css
var add_edit_coach_default2;
var init_add_edit_coach2 = __esm({
  "angular:jit:style:src\\app\\coach\\add-edit-coach\\add-edit-coach.css"() {
    add_edit_coach_default2 = "/* src/app/coach/add-edit-coach/add-edit-coach.css */\n/*# sourceMappingURL=add-edit-coach.css.map */\n";
  }
});

// src/app/coach/add-edit-coach/add-edit-coach.ts
var AddEditCoach;
var init_add_edit_coach3 = __esm({
  "src/app/coach/add-edit-coach/add-edit-coach.ts"() {
    "use strict";
    init_tslib_es6();
    init_add_edit_coach();
    init_add_edit_coach2();
    init_core();
    init_forms();
    init_shared_service();
    AddEditCoach = class AddEditCoach2 {
      sharedService;
      constructor(sharedService) {
        this.sharedService = sharedService;
      }
      coach;
      coachId = "0";
      coachName = "";
      ngOnInit() {
        this.coachId = this.coach.CoachId;
        this.coachName = this.coach.CoachName;
      }
      addCoach() {
        var coach = {
          CoachId: this.coachId,
          CoachName: this.coachName
        };
        this.sharedService.addCoach(coach).subscribe((res) => {
          alert(res.toString());
        });
      }
      updateCoach() {
        var coach = {
          CoachId: this.coachId,
          CoachName: this.coachName
        };
        this.sharedService.updateCoach(coach).subscribe((res) => {
          alert(res.toString());
        });
      }
      static ctorParameters = () => [
        { type: SharedService }
      ];
      static propDecorators = {
        coach: [{ type: Input }]
      };
    };
    AddEditCoach = __decorate([
      Component({
        selector: "app-add-edit-coach",
        imports: [FormsModule],
        template: add_edit_coach_default,
        styles: [add_edit_coach_default2]
      })
    ], AddEditCoach);
  }
});

export {
  AddEditCoach,
  init_add_edit_coach3 as init_add_edit_coach
};
//# sourceMappingURL=chunk-Z25BOWNM.js.map
