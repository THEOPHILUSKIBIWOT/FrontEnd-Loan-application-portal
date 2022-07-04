import { Component, OnInit } from '@angular/core';
import { LoanApplication } from '../model/loan-application';

@Component({
  selector: 'app-loan-status',
  templateUrl: './loan-status.component.html',
  styleUrls: ['./loan-status.component.css']
})
export class LoanStatusComponent implements OnInit {
  public loanapplication: LoanApplication[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
