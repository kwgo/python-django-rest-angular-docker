import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCoach } from './show-coach';

describe('ShowCoach', () => {
  let component: ShowCoach;
  let fixture: ComponentFixture<ShowCoach>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowCoach]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCoach);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
