import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { StyleClassModule } from 'primeng/styleclass';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { ChartModule } from 'primeng/chart';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserModule } from './user/user.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,

        FormsModule,
        ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
       AdminRoutingModule,
    ],



})
export class AdminModule { }
