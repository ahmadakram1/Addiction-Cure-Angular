import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAndRegisterComponent } from './login-and-register/login-and-register.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: "Login",
    component: LoginComponent
  },
  {
    path: "Register",
    component: RegisterComponent
  },
  {
    path: "LandR",
    component: LoginAndRegisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
