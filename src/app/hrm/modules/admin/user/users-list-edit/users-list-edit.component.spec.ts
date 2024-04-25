import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListEditComponent } from './users-list-edit.component';

describe('UsersListEditComponent', () => {
  let component: UsersListEditComponent;
  let fixture: ComponentFixture<UsersListEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersListEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
