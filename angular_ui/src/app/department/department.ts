import { Component, OnInit } from '@angular/core';
import { ShowDepartment } from './show-department/show-department'

@Component({
  selector: 'app-department',
  imports: [ShowDepartment],
  templateUrl: './department.html',
  styleUrl: './department.css'
})
export class Department implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
