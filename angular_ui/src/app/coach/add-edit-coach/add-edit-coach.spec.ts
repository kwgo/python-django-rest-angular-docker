import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCoach } from './add-edit-coach';

describe('AddEditCoach', () => {
  let component: AddEditCoach;
  let fixture: ComponentFixture<AddEditCoach>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditCoach]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditCoach);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
