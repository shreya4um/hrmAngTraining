import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLeavesUsersComponent } from './view-leaves-users.component';

describe('ViewLeavesUsersComponent', () => {
  let component: ViewLeavesUsersComponent;
  let fixture: ComponentFixture<ViewLeavesUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewLeavesUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewLeavesUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
