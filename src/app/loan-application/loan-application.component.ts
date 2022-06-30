import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoanApplicationService } from '../loan-application.service';

@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.css']
})
export class LoanApplicationComponent implements OnInit {

  constructor(private loanapplicationservice: LoanApplicationService) { }

  ngOnInit(): void {
  }
  loanApplied(){
    
  }
}
