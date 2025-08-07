import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Shared } from '../../service/shared'

@Component({
  selector: 'app-add-edit-member',
  imports: [FormsModule],
  templateUrl: './add-edit-member.html',
  styleUrl: './add-edit-member.css'
})
export class AddEditMember implements OnInit {
  constructor(private shared:Shared) {}

  @Input() member: any;
  
  coaches: any = [];
  memberId: string = "0";
  memberName: string = "";
  coachName: string = "";
  dateOfJoin: string = "";
  photoFileName: string = "";
  photoFilePath: string = "";

  ngOnInit() {
      // this.memberId = this.member.MemberId;
      // this.memberName = this.member.MemberName;
      // this.coachName = this.member.Coach;
      // this.dateOfJoin = this.member.DateOfJoin;
      // this.photoFileName = this.member.PhotoFileName;

    this.loadCoaches();
  }
  
  loadCoaches() {
    this.shared.getCoaches().subscribe((data: any) => {
      this.coaches = data;

      this.memberId = this.member.MemberId;
      this.memberName = this.member.MemberName;
      this.coachName = this.member.Coach;
      this.dateOfJoin = this.member.DateOfJoin;
      this.photoFileName = this.member.PhotoFileName;
      this.photoFilePath = this.shared.mediaUrl + this.member.PhotoFileName;
      console.log(this.photoFilePath);
    });
  }

  addMember() {
    var member = {
      MemberId : this.memberId,
      MemberName : this.memberName,
      Coach: this.coachName,
      DateOfJoin: this.dateOfJoin,
      PhotoFileName: this.photoFileName
    };
    this.shared.addMember(member).subscribe(data=>{
      alert(data.toString());
    });
  }

  updateMember() {
    var member = {
      MemberId : this.memberId,
      MemberName : this.memberName,
      Coach: this.coachName,
      DateOfJoin: this.dateOfJoin,
      PhotoFileName: this.photoFileName
    };
    this.shared.updateMember(member).subscribe(data=>{
      alert(data.toString());
    });
  }

  
  uploadPhoto(event: any) {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.shared.uploadPhoto(formData).subscribe((data: any) => {
      this.photoFileName = data.toString();
      this.photoFilePath = this.shared.mediaUrl + this.photoFileName;
    })
  }
}
