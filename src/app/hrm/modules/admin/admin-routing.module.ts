import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [

  { path: "", pathMatch: 'full', redirectTo: 'Dashboard' },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})




// @NgModule({
//   imports: [RouterModule.forChild([
//       { path: '', component:DashboardComponent }
//   ])],
//   exports: [RouterModule]
// })

export class AdminRoutingModule { }
