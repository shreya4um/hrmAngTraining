import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailUsersComponent } from './view-detail-users.component';

describe('ViewDetailUsersComponent', () => {
  let component: ViewDetailUsersComponent;
  let fixture: ComponentFixture<ViewDetailUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewDetailUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewDetailUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
