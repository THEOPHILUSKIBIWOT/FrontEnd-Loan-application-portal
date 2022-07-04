import { Component, OnInit } from '@angular/core';
import {LoanApplication} from '../model/loan-application'
import { LoanApplicationService } from '../loan-application.service';

@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.css']
})
export class LoanApplicationComponent implements OnInit {

  loanapplication: LoanApplication =new LoanApplication();
  submitted = false;

  
  constructor(private loanapplicationservice: LoanApplicationService) { }

  ngOnInit(): void {
  }
  loanApplied(){
    this.loanapplicationservice.applyLoan(this.loanapplication)
    .subscribe(data =>{
     alert("Loan applied Successfully Wait as we process your request. Thank you ")
     },error=>alert("Sorry kindly fill the form correctly and apply again"));
     this.loanapplication=new LoanApplication()
  }  
}
