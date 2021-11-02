import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login/login.component';
import { RegisterUserComponent } from './register-user/register-user/register-user.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: 'registro', component: RegisterUserComponent },
];

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes),
  ],

  declarations: [
    LoginComponent,
    RegisterUserComponent
  ],

  exports: [ LoginComponent, RegisterUserComponent ],
})
export class SecurityModule { }
