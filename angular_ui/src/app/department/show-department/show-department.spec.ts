import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDepartment } from './show-department';

describe('ShowDepartment', () => {
  let component: ShowDepartment;
  let fixture: ComponentFixture<ShowDepartment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowDepartment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDepartment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
