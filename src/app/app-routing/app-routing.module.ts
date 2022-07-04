import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoanApplicationComponent } from '../loan-application/loan-application.component';
import { LoanStatusComponent } from '../loan-status/loan-status.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home',component:LoginComponent},
  {path:'login_page',component:LoginComponent},
  {path:'Registration_page',component:RegistrationComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'Loan_Application',component:LoanApplicationComponent},
  {path:'Loan_status',component:LoanStatusComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
