import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { ViewAttendanceUsersComponent } from './view-attendance-users/view-attendance-users.component';
import { ViewLeavesUsersComponent } from './view-leaves-users/view-leaves-users.component';
import { ViewDetailUsersComponent } from './view-detail-users/view-detail-users.component';
import { AddUpdateUserComponent } from './add-update-user/add-update-user.component';
import { UsersListEditComponent } from './users-list-edit/users-list-edit.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'user-list'
  },

  { path: 'user-list', component: UserListComponent },
  { path: 'add-update-user', component: AddUpdateUserComponent },
  { path: 'view-attendance', component: ViewAttendanceUsersComponent },
  { path: 'view-detail', component: ViewDetailUsersComponent },
  { path: 'view-leaves', component: ViewLeavesUsersComponent },
  { path: 'user-list-edit', component: UsersListEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
