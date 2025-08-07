import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMember } from './add-edit-member';

describe('AddEditMember', () => {
  let component: AddEditMember;
  let fixture: ComponentFixture<AddEditMember>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditMember]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditMember);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
