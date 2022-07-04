import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoanApplicationService {
baseUrl= environment.LoanApplicationBaseUrl
  constructor(private http : HttpClient) { }

  public applyLoan(Staff: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}loanapplication/add`,Staff)
}
}