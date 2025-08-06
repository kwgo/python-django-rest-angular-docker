//import { Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Department } from './department/department'
// import { ShowDepartment } from './department/show-department/show-department'
// import { AddEditDepartment } from './department/add-edit-department/add-edit-department'
import { Employee } from './employee/employee'
// import { ShowEmployee } from './employee/show-employee/show-employee'
// import { AddEditEmployee } from './employee/add-edit-employee/add-edit-employee'

export const routes: Routes = [

  { path: 'department', component: Department }, 
  { path: 'employee', component: Employee }, 

];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })

// export class AppRoutes { }