import { Component } from '@angular/core';

import { ShowMember } from './show-member/show-member'

@Component({
  selector: 'app-member',
  imports: [ShowMember],
  templateUrl: './member.html',
  styleUrl: './member.css'
})
export class Member {

}
