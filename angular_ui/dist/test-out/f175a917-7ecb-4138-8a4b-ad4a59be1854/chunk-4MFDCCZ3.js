import {
  AddEditMember,
  init_add_edit_member
} from "./chunk-ENMKV3DZ.js";
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

// angular:jit:template:src\app\member\show-member\show-member.html
var show_member_default;
var init_show_member = __esm({
  "angular:jit:template:src\\app\\member\\show-member\\show-member.html"() {
    show_member_default = `<!-- Button trigger modal -->\r
<button type="button" class="btn btn-primary float-right m-2" data-toggle="modal" data-target="#exampleModal"\r
    (click)="addMember()" data-backdrop="static" data-keyboard="false">\r
    Add Member\r
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
                    (click)="closeAddEditMemberDialog()">\r
                    <span aria-hidden="true">&times;</span>\r
                </button>\r
            </div>\r
            <div class="modal-body">\r
                @if (activateAddEditMember) {\r
                <app-add-edit-member [member]="member"></app-add-edit-member>\r
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
                    <input [(ngModel)] = "memberIdFilter" class="form-control" (keyup)="filterMember()" placeholder="Filter">\r
                </div>\r
                Member Id\r
                <button type="button" class="btn btn-outline" (click)="sortMember('MemberId', true)">\r
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">\r
                        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>\r
                    </svg>\r
                </button>\r
                <button type="button" class="btn btn-outline" (click)="sortMember('MemberId', false)">\r
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\r
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>\r
                    </svg>\r
                </button>\r
            </th>\r
            <th>\r
                <div class="d-flex flex-row">\r
                    <input [(ngModel)] = "memberNameFilter" class="form-control" (keyup)="filterMember()" placeholder="Filter">\r
                </div>\r
                Member Name\r
                <button type="button" class="btn btn-outline" (click)="sortMember('MemberName', true)">\r
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">\r
                        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>\r
                    </svg>\r
                </button>\r
                <button type="button" class="btn btn-outline" (click)="sortMember('MemberName', false)">\r
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\r
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>\r
                    </svg>\r
                </button>\r
            </th>\r
            <th>\r
                <div class="d-flex flex-row">\r
                    <input [(ngModel)] = "memberCoachFilter" class="form-control" (keyup)="filterMember()" placeholder="Filter">\r
                </div>\r
                Coach\r
                <button type="button" class="btn btn-outline" (click)="sortMember('Coach', true)">\r
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">\r
                        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>\r
                    </svg>\r
                </button>\r
                <button type="button" class="btn btn-outline" (click)="sortMember('Coach', false)">\r
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\r
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>\r
                    </svg>\r
                </button>\r
            </th>\r
            <th>\r
                <div class="d-flex flex-row">\r
                    <input [(ngModel)] = "memberDateOfJoinFilter" class="form-control" (keyup)="filterMember()" placeholder="Filter">\r
                </div>\r
                Date Of Join\r
                <button type="button" class="btn btn-outline" (click)="sortMember('DateOfJoin', true)">\r
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">\r
                        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>\r
                    </svg>\r
                </button>\r
                <button type="button" class="btn btn-outline" (click)="sortMember('DateOfJoin', false)">\r
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\r
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>\r
                    </svg>\r
                </button>\r
            </th>\r
            <th>Options</th>\r
        </tr>\r
    </thead>\r
    <tbody>\r
        @for (member of members; track member.MemberId) {\r
        <tr>\r
            <td>{{ member.MemberId }}</td>\r
            <td>{{ member.MemberName }}</td>\r
            <td>{{ member.Coach }}</td>\r
            <td>{{ member.DateOfJoin }}</td>\r
            <td>\r
                <button type="button" class="btn btn-light mr-1" data-toggle="modal" data-target="#exampleModal"\r
                    (click)="updateMember(member)" data-backdrop="static" data-keyboard="false">\r
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">\r
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>\r
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>\r
                        </svg>\r
                </button>\r
                <button type="button" class="btn btn-light mr-1" (click)="deleteMember(member)">\r
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">\r
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>\r
                    </svg>\r
                </button>\r
            </td>\r
        </tr>\r
        } @empty {\r
        <tr>\r
            <td colspan="5">No items found.</td>\r
        </tr>\r
        }\r
<!--\r
        <tr *ngFor="let member of members">\r
            <td>{{ member.MemberId }}</td>\r
            <td>{{ member.MemberName }}</td>\r
            <td></td>\r
        </tr>\r
-->\r
    </tbody>\r
</table>\r
`;
  }
});

// angular:jit:style:src\app\member\show-member\show-member.css
var show_member_default2;
var init_show_member2 = __esm({
  "angular:jit:style:src\\app\\member\\show-member\\show-member.css"() {
    show_member_default2 = "/* src/app/member/show-member/show-member.css */\n/*# sourceMappingURL=show-member.css.map */\n";
  }
});

// src/app/member/show-member/show-member.ts
var ShowMember;
var init_show_member3 = __esm({
  "src/app/member/show-member/show-member.ts"() {
    "use strict";
    init_tslib_es6();
    init_show_member();
    init_show_member2();
    init_core();
    init_forms();
    init_shared_service();
    init_add_edit_member();
    ShowMember = class ShowMember2 {
      sharedService;
      members = [];
      member;
      activateAddEditMember = false;
      modalTitle = "";
      membersOrigin = [];
      memberIdFilter = "";
      memberNameFilter = "";
      memberCoachFilter = "";
      memberDateOfJoinFilter = "";
      constructor(sharedService) {
        this.sharedService = sharedService;
      }
      ngOnInit() {
        console.log("show-departemnt init start ----");
        this.getMembers();
      }
      getMembers() {
        this.sharedService.getMembers().subscribe((data) => {
          console.log("Shared service getMembers() start ---");
          this.members = data;
          this.membersOrigin = data;
          console.log(data);
        });
      }
      addMember() {
        this.member = {
          MemberId: 0,
          MemberName: "",
          Coach: "",
          DateOfJoin: "",
          PhotoFileName: ""
        };
        this.modalTitle = "Add Member";
        this.activateAddEditMember = true;
      }
      updateMember(member) {
        this.addMember();
        console.log("start edit ....");
        console.log(member);
        this.member = member;
        console.log("start edit ....22 33 44");
        this.modalTitle = "Edit Member";
        this.activateAddEditMember = true;
      }
      deleteMember(member) {
        if (confirm("Are you sure??")) {
          this.sharedService.deleteMember(member.MemberId).subscribe((data) => {
            alert(data.toString());
            this.getMembers();
          });
        }
      }
      closeAddEditMemberDialog() {
        this.activateAddEditMember = false;
        this.getMembers();
      }
      filterMember() {
        var memberIdFilter = this.memberIdFilter;
        var memberNameFilter = this.memberNameFilter;
        var memberCoachFilter = this.memberCoachFilter;
        var memberDateOfJoinFilter = this.memberDateOfJoinFilter;
        this.members = this.membersOrigin.filter(function(member) {
          return member.MemberId.toString().toLowerCase().includes(memberIdFilter.toString().toLowerCase().trim()) && member.MemberName.toString().toLowerCase().includes(memberNameFilter.toString().toLowerCase().trim()) && member.Coach.toString().toLowerCase().includes(memberCoachFilter.toString().toLowerCase().trim()) && member.DateOfJoin.toString().toLowerCase().includes(memberDateOfJoinFilter.toString().toLowerCase().trim());
        });
      }
      sortMember(prop, asc) {
        this.members = this.membersOrigin.sort(function(member1, member2) {
          if (asc) {
            return member1[prop] > member2[prop] ? 1 : member1[prop] < member2[prop] ? -1 : 0;
          } else {
            return member2[prop] > member1[prop] ? 1 : member2[prop] < member1[prop] ? -1 : 0;
          }
        });
      }
      static ctorParameters = () => [
        { type: SharedService }
      ];
    };
    ShowMember = __decorate([
      Component({
        selector: "app-show-member",
        imports: [FormsModule, AddEditMember],
        template: show_member_default,
        styles: [show_member_default2]
      })
    ], ShowMember);
  }
});

export {
  ShowMember,
  init_show_member3 as init_show_member
};
//# sourceMappingURL=chunk-4MFDCCZ3.js.map
