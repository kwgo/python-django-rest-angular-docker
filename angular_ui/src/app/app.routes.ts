//import { Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Coach } from './coach/coach'
// import { ShowCoach } from './coach/show-coach/show-coach'
// import { AddEditCoach } from './coach/add-edit-coach/add-edit-coach'
import { Member } from './member/member'
// import { ShowMember } from './member/show-member/show-member'
// import { AddEditMember } from './member/add-edit-member/add-edit-member'

export const routes: Routes = [

  { path: 'coach', component: Coach }, 
  { path: 'member', component: Member }, 

];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })

// export class AppRoutes { }