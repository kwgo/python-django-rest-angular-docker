import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { NgFor } from '@angular/common'; // Import NgFor specifically

import { Shared } from '../../service/shared'
import { AddEditDepartment } from '../add-edit-department/add-edit-department';

@Component({
  selector: 'app-show-department',
  // imports: [NgFor],
  imports: [FormsModule, AddEditDepartment],
  templateUrl: './show-department.html',
  styleUrl: './show-department.css'
})
export class ShowDepartment implements OnInit {
  departments: any = [];

  department: any;

  activateAddEditDepartment: boolean = false;
  modalTitle: string = "";

  departmentIdFilter: string = "";
  departmentNameFilter: string = "";
  departmentsOrigin: any = [];

  constructor(private shared: Shared) {

  }

  ngOnInit(): void {
    console.log("show-departemnt init start ----");
    this.getDepartments();
  }

  getDepartments() {
    this.shared.getDepartments().subscribe(data => {
      console.log("Shared service getDepartments() start ---");
      this.departments = data;
      this.departmentsOrigin = data;
      console.log(data);
    }
    );
  }

  addDepartment() {
    this.department = {
      DepartmentId: 0,
      DepartmentName: ""
    }
    this.modalTitle = "Add Department";
    this.activateAddEditDepartment = true;
  }

  updateDepartment(department: any) {
    this.addDepartment();
    console.log("start edit ....");
    console.log(department);
    this.department = department;

    console.log("start edit ....22 33 44");
    this.modalTitle = "Edit Department";
    this.activateAddEditDepartment = true;
  }

  deleteDepartment(department: any) {
    if (confirm('Are you sure??')) {
      this.shared.deleteDepartment(department.DepartmentId).subscribe(data => {
        alert(data.toString());
        this.getDepartments();
      });
    }
  }

  closeAddEditDepartmentDialog() {
    this.activateAddEditDepartment = false;
    this.getDepartments();
  }

  filterDepartment() {
    var departmentIdFilter = this.departmentIdFilter;
    var departmentNameFilter = this.departmentNameFilter;

    this.departments = this.departmentsOrigin.filter(
      function (department: any) {
        return department.DepartmentId.toString().toLowerCase().includes(departmentIdFilter.toString().toLowerCase().trim())
          && department.DepartmentName.toString().toLowerCase().includes(departmentNameFilter.toString().toLowerCase().trim());
      }
    );
  }

  sortDepartment(prop: any, asc: boolean) {
    this.departments = this.departmentsOrigin.sort(
      function (department1: any, department2: any) {
        if (asc) {
          return (department1[prop] > department2[prop]) ? 1 : ((department1[prop] < department2[prop]) ? -1 : 0);
        } else {
          return (department2[prop] > department1[prop]) ? 1 : ((department2[prop] < department1[prop]) ? -1 : 0);
        }
      });

  }

}
