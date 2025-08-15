import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Shared } from '../../service/shared.service'
import { AddEditMember } from '../add-edit-member/add-edit-member';

@Component({
  selector: 'app-show-member',
  imports: [FormsModule, AddEditMember],
  templateUrl: './show-member.html',
  styleUrl: './show-member.css'
})

export class ShowMember implements OnInit {
  members: any = [];

  member: any;

  activateAddEditMember: boolean = false;
  modalTitle: string = "";

  membersOrigin: any = [];
  memberIdFilter: string = "";
  memberNameFilter: string = "";
  memberCoachFilter: string = "";
  memberDateOfJoinFilter: string = "";

  constructor(private shared: Shared) {
  }

  ngOnInit(): void {
    console.log("show-departemnt init start ----");
    this.getMembers();
  }

  getMembers() {
    this.shared.getMembers().subscribe(data => {
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
    }
    this.modalTitle = "Add Member";
    this.activateAddEditMember = true;
  }


  updateMember(member: any) {
    this.addMember();
    console.log("start edit ....");
    console.log(member);
    this.member = member;

    console.log("start edit ....22 33 44");
    this.modalTitle = "Edit Member";
    this.activateAddEditMember = true;
  }

  deleteMember(member: any) {
    if (confirm('Are you sure??')) {
      this.shared.deleteMember(member.MemberId).subscribe(data => {
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

    this.members = this.membersOrigin.filter(
      function (member: any) {
        return member.MemberId.toString().toLowerCase().includes(memberIdFilter.toString().toLowerCase().trim())
          && member.MemberName.toString().toLowerCase().includes(memberNameFilter.toString().toLowerCase().trim())
          && member.Coach.toString().toLowerCase().includes(memberCoachFilter.toString().toLowerCase().trim())
          && member.DateOfJoin.toString().toLowerCase().includes(memberDateOfJoinFilter.toString().toLowerCase().trim());
      }
    );
  }

  sortMember(prop: any, asc: boolean) {
    this.members = this.membersOrigin.sort(
      function (member1: any, member2: any) {
        if (asc) {
          return (member1[prop] > member2[prop]) ? 1 : ((member1[prop] < member2[prop]) ? -1 : 0);
        } else {
          return (member2[prop] > member1[prop]) ? 1 : ((member2[prop] < member1[prop]) ? -1 : 0);
        }
      });

  }
}
