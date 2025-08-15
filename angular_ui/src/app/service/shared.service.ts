import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class Shared {
  readonly apiUrl = environment.apiBaseUrl;
  readonly mediaUrl = this.apiUrl + '/media/';

  constructor(private http:HttpClient) { }
  
  getCoaches():Observable<any[]>{
    console.log("-----------------------------");
    return this.http.get<any[]>(this.apiUrl + '/coach/');
  }

  addCoach(coach:any) {
    return this.http.post(this.apiUrl + '/coach/', coach);
  }

  updateCoach(coach:any) {
    return this.http.put(this.apiUrl + '/coach/', coach);
  }
  deleteCoach(coachId:any) {
    return this.http.delete(this.apiUrl + '/coach/' + coachId + '/');
  }

  getMembers():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl + '/member/');
  }

  addMember(member:any) {
    return this.http.post(this.apiUrl + '/member/', member);
  }

  updateMember(member:any) {
    return this.http.put(this.apiUrl + '/member/', member);
  }
  deleteMember(memberId:any) {
    return this.http.delete(this.apiUrl + '/member/' + memberId + '/');
  }

  uploadPhoto(photo:any) {
    return this.http.post(this.apiUrl + '/savefile/', photo);
  }

  getCoachNames():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl + '/coach/');
  }

}
