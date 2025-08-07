import { Component, OnInit } from '@angular/core';
import { ShowCoach } from './show-coach/show-coach'

@Component({
  selector: 'app-coach',
  imports: [ShowCoach],
  templateUrl: './coach.html',
  styleUrl: './coach.css'
})
export class Coach implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
