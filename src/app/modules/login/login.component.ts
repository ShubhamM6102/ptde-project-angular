import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { authArray } from 'src/app/models/users';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {



  email: string ='';
  password: string='';
  isLoginSuccessful = false;
  error?:string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(f:any) {
    if (this.authService.authenticate(this.email, this.password)) {
      alert('Successfully Login');
      this.router.navigate(['home', this.email,'dashboard']);
    } else {
     // this.error='email or password is inavlid!'
      alert('Incorrect email or password');
      f.form.reset();
    }
    //this.error=""
  }


    // constructor() { }
  //   ngOnInit() {
  // }
  // email?: string;
  // password?: string;

  // onSubmit() {
  //   const user = authArray.find(u => u.email === this.email && u.password === this.password);
  //   if (user) {
  //     localStorage.setItem('email', user.email);
  //     // Navigate to home page
  //   } else {
  //     // Show error message
  //   }
  // }

 



 

 
}
