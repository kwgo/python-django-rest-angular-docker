import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Shared } from '../../service/shared'
import { AddEditEmployee } from '../add-edit-employee/add-edit-employee';

@Component({
  selector: 'app-show-employee',
  imports: [FormsModule, AddEditEmployee],
  templateUrl: './show-employee.html',
  styleUrl: './show-employee.css'
})

export class ShowEmployee implements OnInit {
  employees: any = [];

  employee: any;

  activateAddEditEmployee: boolean = false;
  modalTitle: string = "";

  employeesOrigin: any = [];
  employeeIdFilter: string = "";
  employeeNameFilter: string = "";
  employeeDepartmentFilter: string = "";
  employeeDateOfJoinFilter: string = "";

  constructor(private shared: Shared) {
  }

  ngOnInit(): void {
    console.log("show-departemnt init start ----");
    this.getEmployees();
  }

  getEmployees() {
    this.shared.getEmployees().subscribe(data => {
      console.log("Shared service getEmployees() start ---");
      this.employees = data;
      this.employeesOrigin = data;
      console.log(data);
    });
  }

  addEmployee() {
    this.employee = {
      EmployeeId: 0,
      EmployeeName: "",
      Department: "",
      DateOfJoin: "",
      PhotoFileName: ""
    }
    this.modalTitle = "Add Employee";
    this.activateAddEditEmployee = true;
  }


  updateEmployee(employee: any) {
    this.addEmployee();
    console.log("start edit ....");
    console.log(employee);
    this.employee = employee;

    console.log("start edit ....22 33 44");
    this.modalTitle = "Edit Employee";
    this.activateAddEditEmployee = true;
  }

  deleteEmployee(employee: any) {
    if (confirm('Are you sure??')) {
      this.shared.deleteEmployee(employee.EmployeeId).subscribe(data => {
        alert(data.toString());
        this.getEmployees();
      });
    }
  }

  closeAddEditEmployeeDialog() {
    this.activateAddEditEmployee = false;
    this.getEmployees();
  }

  filterEmployee() {
    var employeeIdFilter = this.employeeIdFilter;
    var employeeNameFilter = this.employeeNameFilter;
    var employeeDepartmentFilter = this.employeeDepartmentFilter;
    var employeeDateOfJoinFilter = this.employeeDateOfJoinFilter;

    this.employees = this.employeesOrigin.filter(
      function (employee: any) {
        return employee.EmployeeId.toString().toLowerCase().includes(employeeIdFilter.toString().toLowerCase().trim())
          && employee.EmployeeName.toString().toLowerCase().includes(employeeNameFilter.toString().toLowerCase().trim())
          && employee.Department.toString().toLowerCase().includes(employeeDepartmentFilter.toString().toLowerCase().trim())
          && employee.DateOfJoin.toString().toLowerCase().includes(employeeDateOfJoinFilter.toString().toLowerCase().trim());
      }
    );
  }

  sortEmployee(prop: any, asc: boolean) {
    this.employees = this.employeesOrigin.sort(
      function (employee1: any, employee2: any) {
        if (asc) {
          return (employee1[prop] > employee2[prop]) ? 1 : ((employee1[prop] < employee2[prop]) ? -1 : 0);
        } else {
          return (employee2[prop] > employee1[prop]) ? 1 : ((employee2[prop] < employee1[prop]) ? -1 : 0);
        }
      });

  }
}
