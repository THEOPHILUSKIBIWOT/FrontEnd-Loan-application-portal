import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  msg = ''
  constructor(private registrationservice : RegistrationService, private router : Router) { }

  ngOnInit(): void {
  }
loginUser(){
this.registrationservice.loginUserFromRemote(this.user).subscribe(
 data => {
    alert(" Successfull Login, Welcome to your dashboard");
this.router.navigate(['/dashboard'])
    },
    error=>alert("Sorry Please try again"));
    this.msg="Bad Credentials, Please enter valid Staff number and password"
  }
  gotoregistration(){
    this.router.navigate(['/Registration_page'])
  }
}