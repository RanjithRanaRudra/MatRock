import { ErrorComponent } from './error/error.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonImportModule } from '../shared/imports/common.module';

const routes: Routes = [
  {path: '', component: AuthComponent, children: [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignUpComponent},
    {path: 'reset-password', component: ResetPasswordComponent},
    {path: 'page-not-found', component: ErrorComponent},
  ]}
];

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignUpComponent,
    ResetPasswordComponent,
    ErrorComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonImportModule
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {

}
