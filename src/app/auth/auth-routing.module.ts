import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAndRegisterComponent } from './login-and-register/login-and-register.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  {
    path: "LandR",
    component: LoginAndRegisterComponent
  },
  {
    path: "SignIn",
    component: LoginComponent
  },
  {
    path: "SignUp",
    component: SignUpComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
