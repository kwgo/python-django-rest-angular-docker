import { Component } from '@angular/core';

import { ShowEmployee } from './show-employee/show-employee'

@Component({
  selector: 'app-employee',
  imports: [ShowEmployee],
  templateUrl: './employee.html',
  styleUrl: './employee.css'
})
export class Employee {

}
