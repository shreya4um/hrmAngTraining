import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAttendanceUsersComponent } from './view-attendance-users.component';

describe('ViewAttendanceUsersComponent', () => {
  let component: ViewAttendanceUsersComponent;
  let fixture: ComponentFixture<ViewAttendanceUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAttendanceUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAttendanceUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
