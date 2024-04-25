import { Component, NgModule } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

import { Router } from '@angular/router';
import { DashboardComponent } from '../../modules/admin/dashboard/dashboard.component';


@Component({
  selector: 'app-login',
  // standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  imports: [
    
        ReactiveFormsModule,
        NgModule,
        FormControl,DashboardComponent
      ]
      

        loginForm: FormGroup;
        submitted: boolean = false;
      
        constructor(private router: Router, private formBuilder: FormBuilder, public layoutService: LayoutService) {
          this.formInit();
        }
      
      
      
        formInit() {
          this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
          });
      
          // console.log(this.loginForm, "bhuvi")
        }
      
        get f() {
          return this.loginForm.controls
        }
      
      
      
        login() {
          this.submitted = true;
          if (this.loginForm.invalid) {
            return;
          }
      
          console.log(this.loginForm.value);
          // Add your login logic here
          this.router.navigate(['/dashboard']);
        }
        reset() {
          this.loginForm.reset()
        }
      
      }

