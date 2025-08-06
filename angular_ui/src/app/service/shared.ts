import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
//  imports: [HttpClient],
  providedIn: 'root'
})

export class Shared {
  readonly apiUrl = "http://127.0.0.1:8000/";
  readonly mediaUrl = "http://127.0.0.1:8000/media/";

  constructor(private http:HttpClient) { }
  
  getDepartments():Observable<any[]>{
    console.log("-----------------------------");
      return this.http.get<any[]>(this.apiUrl + '/department/');
  }

  addDepartment(department:any) {
      return this.http.post(this.apiUrl + '/department/', department);
  }

  updateDepartment(department:any) {
      return this.http.put(this.apiUrl + '/department/', department);
  }
  deleteDepartment(departmentId:any) {
      return this.http.delete(this.apiUrl + '/department/' + departmentId + '/');
  }

  getEmployees():Observable<any[]>{
      return this.http.get<any[]>(this.apiUrl + '/employee/');
  }

  addEmployee(employee:any) {
      return this.http.post(this.apiUrl + '/employee/', employee);
  }

  updateEmployee(employee:any) {
      return this.http.put(this.apiUrl + '/employee/', employee);
  }
  deleteEmployee(employeeId:any) {
      return this.http.delete(this.apiUrl + '/employee/' + employeeId + '/');
  }

  uploadPhoto(photo:any) {
      return this.http.post(this.apiUrl + '/savefile/', photo);
  }

  getDepartmentNames():Observable<any[]>{
      return this.http.get<any[]>(this.apiUrl + '/department/');
  }

}
