//import { Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Coach } from './coach/coach'
import { Member } from './member/member'

import { Login } from './login/login'
import { Main } from './main/main'
import { AuthGuard } from './guard/auth.guard'; // we'll create this to protect routes


export const routes: Routes = [

  { path: 'coach', component: Coach, canActivate: [AuthGuard] }, 
  { path: 'member', component: Member, canActivate: [AuthGuard]}, 
  
  { path: 'login', component: Login }, 

 // { path: 'login', component: LoginComponent },
 // { path: '', component: Main, canActivate: [AuthGuard] }, // main page protected
//  { path: '**', redirectTo: '' }  // fallback route
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })

// export class AppRoutes { }