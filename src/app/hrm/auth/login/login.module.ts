import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from 'src/app/demo/components/auth/login/login-routing.module';
import { ButtonModule } from 'primeng/button/button';
import { InputTextModule } from 'primeng/inputtext/inputtext';
import { CheckboxModule } from 'primeng/checkbox/checkbox';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FormGroup,
    ButtonModule,
      Validators,
      FormControl,

  ]
})
export class LoginModule {
 



 }
