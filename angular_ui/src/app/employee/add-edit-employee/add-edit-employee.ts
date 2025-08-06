import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Shared } from '../../service/shared'

@Component({
  selector: 'app-add-edit-employee',
  imports: [FormsModule],
  templateUrl: './add-edit-employee.html',
  styleUrl: './add-edit-employee.css'
})
export class AddEditEmployee implements OnInit {
  constructor(private shared:Shared) {}

  @Input() employee: any;
  
  departments: any = [];
  employeeId: string = "0";
  employeeName: string = "";
  departmentName: string = "";
  dateOfJoin: string = "";
  photoFileName: string = "";
  photoFilePath: string = "";

  ngOnInit() {
      // this.employeeId = this.employee.EmployeeId;
      // this.employeeName = this.employee.EmployeeName;
      // this.departmentName = this.employee.Department;
      // this.dateOfJoin = this.employee.DateOfJoin;
      // this.photoFileName = this.employee.PhotoFileName;

    this.loadDepartments();
  }
  
  loadDepartments() {
    this.shared.getDepartments().subscribe((data: any) => {
      this.departments = data;

      this.employeeId = this.employee.EmployeeId;
      this.employeeName = this.employee.EmployeeName;
      this.departmentName = this.employee.Department;
      this.dateOfJoin = this.employee.DateOfJoin;
      this.photoFileName = this.employee.PhotoFileName;
      this.photoFilePath = this.shared.mediaUrl + this.employee.PhotoFileName;
      console.log(this.photoFilePath);
    });
  }

  addEmployee() {
    var employee = {
      EmployeeId : this.employeeId,
      EmployeeName : this.employeeName,
      Department: this.departmentName,
      DateOfJoin: this.dateOfJoin,
      PhotoFileName: this.photoFileName
    };
    this.shared.addEmployee(employee).subscribe(data=>{
      alert(data.toString());
    });
  }

  updateEmployee() {
    var employee = {
      EmployeeId : this.employeeId,
      EmployeeName : this.employeeName,
      Department: this.departmentName,
      DateOfJoin: this.dateOfJoin,
      PhotoFileName: this.photoFileName
    };
    this.shared.updateEmployee(employee).subscribe(data=>{
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






// import { Component, OnInit, Input } from '@angular/core';

// import { Shared } from '../../service/shared'

// @Component({
//   selector: 'app-add-edit-employee',
//   imports: [],
//   templateUrl: './add-edit-employee.html',
//   styleUrl: './add-edit-employee.css'
// })

// export class AddEditEmployee implements OnInit {
//   constructor(private shared: Shared) { }

//   @Input() employee: any; // 👈 funny this 👈👈👈👈👈👈👈👈👈👈

//   employees: any = [];

//   employeeId: string = "0";
//   employeeName: string = "";
//   employee: string = "";
//   dateOfJoin: string = "";
//   photoFileName: string = "";
//   photoFilePath: string = "";

//   ngOnInit() {
//     this.employeeId = this.employee.EmployeeId;
//     this.employeeName = this.employee.EmployeeName;
//     this.employee = this.employee.Employee;
//     this.dateOfJoin = this.employee.DateOfJoin;
//     this.photoFileName = this.employee.PhotoFileName;
//   }

//   loadEmployeeList() {
//     this.shared.getEmployeeNames().subscribe((data: any) => {
//       this.employees = data;
//     });
//   }

//   addEmployee() {
//     var employee = {
//       EmployeeId: this.employeeId,
//       EmployeeName: this.employeeName,
//       Employee: this.employee,
//       DateOfJoin: this.dateOfJoin,
//       PhotoFileName: this.photoFileName
//     };

//     this.shared.addEmployee(employee).subscribe(data => {
//       alert(data.toString());
//     });
//   }

//   updateEmployee() {
//     var employee = {
//       EmployeeId: this.employeeId,
//       EmployeeName: this.employeeName,
//       Employee: this.employee,
//       DateOfJoin: this.dateOfJoin,
//       PhotoFileName: this.photoFileName
//     };
//     this.shared.updateEmployee(employee).subscribe(data => {
//       alert(data.toString());
//     });
//   }


//   uploadPhoto(event: any) {
//     var file = event.target.files[0];
//     const formData: FormData = new FormData();
//     formData.append('uploadedFile', file, file.name);

//     this.shared.uploadPhoto(formData).subscribe((data: any) => {
//       this.photoFileName = data.toString();
//       this.photoFilePath = this.shared.mediaUrl + this.photoFileName;
//     })
//   }
// }
