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

// angular:jit:template:src\app\member\add-edit-member\add-edit-member.html
var add_edit_member_default;
var init_add_edit_member = __esm({
  "angular:jit:template:src\\app\\member\\add-edit-member\\add-edit-member.html"() {
    add_edit_member_default = '<div class="d-flex flex-row bd-highlight mb-3">\r\n    <div class="form-froup row" style="width: 55%;">\r\n        <label class="col-sm-3 col-form-label">Member Name</label>\r\n        <div class="col-sm-9">\r\n            <input type="text" class="form-control" [(ngModel)]="memberName" placeholder="Enter Member Name">\r\n        </div>\r\n        <label class="col-sm-3 col-form-label">Coach</label>\r\n        <div class="col-sm-9">\r\n            <select class="form-control" [(ngModel)]="coachName">\r\n                <option>--Select--</option>\r\n                @for (coach of coaches; track coach.CoachId) {\r\n                <option>\r\n                    {{ coach.CoachName }}\r\n                </option>\r\n                }\r\n            </select>\r\n        </div>\r\n        <label class="col-sm-3 col-form-label">Date of join</label>\r\n        <div class="col-sm-9">\r\n            <input type="date" [(ngModel)]="dateOfJoin">\r\n        </div>\r\n    </div>\r\n    <div class="ml-3 bd-highlight" style="width: 30%;">\r\n        <img [src]=photoFilePath height="250px;" width="200px;">\r\n        <input type="file" (change)="uploadPhoto($event)" class="mt-2" />\r\n    </div>\r\n</div>\r\n\r\n@if (member.MemberId == 0) {\r\n<button (click)="addMember()" class="btn btn-primary">Add</button>\r\n}\r\n\r\n@if (member.MemberId != 0) {\r\n<button (click)="updateMember()" class="btn btn-primary">Update</button>\r\n}';
  }
});

// angular:jit:style:src\app\member\add-edit-member\add-edit-member.css
var add_edit_member_default2;
var init_add_edit_member2 = __esm({
  "angular:jit:style:src\\app\\member\\add-edit-member\\add-edit-member.css"() {
    add_edit_member_default2 = "/* src/app/member/add-edit-member/add-edit-member.css */\n/*# sourceMappingURL=add-edit-member.css.map */\n";
  }
});

// src/app/member/add-edit-member/add-edit-member.ts
var AddEditMember;
var init_add_edit_member3 = __esm({
  "src/app/member/add-edit-member/add-edit-member.ts"() {
    "use strict";
    init_tslib_es6();
    init_add_edit_member();
    init_add_edit_member2();
    init_core();
    init_forms();
    init_shared_service();
    AddEditMember = class AddEditMember2 {
      sharedService;
      constructor(sharedService) {
        this.sharedService = sharedService;
      }
      member;
      coaches = [];
      memberId = "0";
      memberName = "";
      coachName = "";
      dateOfJoin = "";
      photoFileName = "";
      photoFilePath = "";
      ngOnInit() {
        this.loadCoaches();
      }
      loadCoaches() {
        this.sharedService.getCoaches().subscribe((data) => {
          this.coaches = data;
          this.memberId = this.member.MemberId;
          this.memberName = this.member.MemberName;
          this.coachName = this.member.Coach;
          this.dateOfJoin = this.member.DateOfJoin;
          this.photoFileName = this.member.PhotoFileName;
          this.photoFilePath = this.sharedService.mediaUrl + this.member.PhotoFileName;
          console.log(this.photoFilePath);
        });
      }
      addMember() {
        var member = {
          MemberId: this.memberId,
          MemberName: this.memberName,
          Coach: this.coachName,
          DateOfJoin: this.dateOfJoin,
          PhotoFileName: this.photoFileName
        };
        this.sharedService.addMember(member).subscribe((data) => {
          alert(data.toString());
        });
      }
      updateMember() {
        var member = {
          MemberId: this.memberId,
          MemberName: this.memberName,
          Coach: this.coachName,
          DateOfJoin: this.dateOfJoin,
          PhotoFileName: this.photoFileName
        };
        this.sharedService.updateMember(member).subscribe((data) => {
          alert(data.toString());
        });
      }
      uploadPhoto(event) {
        var file = event.target.files[0];
        const formData = new FormData();
        formData.append("uploadedFile", file, file.name);
        this.sharedService.uploadPhoto(formData).subscribe((data) => {
          this.photoFileName = data.toString();
          this.photoFilePath = this.sharedService.mediaUrl + this.photoFileName;
        });
      }
      static ctorParameters = () => [
        { type: SharedService }
      ];
      static propDecorators = {
        member: [{ type: Input }]
      };
    };
    AddEditMember = __decorate([
      Component({
        selector: "app-add-edit-member",
        imports: [FormsModule],
        template: add_edit_member_default,
        styles: [add_edit_member_default2]
      })
    ], AddEditMember);
  }
});

export {
  AddEditMember,
  init_add_edit_member3 as init_add_edit_member
};
//# sourceMappingURL=chunk-ENMKV3DZ.js.map
