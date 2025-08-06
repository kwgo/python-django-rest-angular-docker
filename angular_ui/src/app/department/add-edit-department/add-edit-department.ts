import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Shared } from '../../service/shared'

@Component({
  selector: 'app-add-edit-department',
  imports: [FormsModule],
  templateUrl: './add-edit-department.html',
  styleUrl: './add-edit-department.css'
})
export class AddEditDepartment implements OnInit {
  constructor(private shared:Shared) {}

  @Input() department: any;
  
  departmentId: string =  "0";
  departmentName:string = "";

  ngOnInit() {
    this.departmentId = this.department.DepartmentId;
    this.departmentName = this.department.DepartmentName;
  }

  addDepartment() {
    var department = {
      DepartmentId : this.departmentId,
      DepartmentName : this.departmentName
    };
    this.shared.addDepartment(department).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateDepartment() {
    var department = {
      DepartmentId : this.departmentId,
      DepartmentName : this.departmentName
    };
    this.shared.updateDepartment(department).subscribe(res=>{
      alert(res.toString());
    });
  }

}
