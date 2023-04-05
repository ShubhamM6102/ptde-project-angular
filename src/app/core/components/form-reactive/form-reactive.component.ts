import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormBuilder,  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth-guard.service';
import { AuthService } from 'src/app/services/auth.service';
//import { AuthGuard } from './auth.guard';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  username?: string;
  password?: string;
  i?:number = 0;

  users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' }
  ];

  onSubmit(form: any) {
    for (const user of this.users) {
      if (user.username === this.username && user.password === this.password) {
        // authenticated
        this.i= 1;
       // alert('Invalid username or password');
       // alert('Invalid username or password');
      }
      //this.router.navigate(['/home']);

    // not authenticated
// else{
//   alert('Invalid username or password');
//   this.router.navigate(['']);
// } 
    }
    if(this.i===1){
      this.router.navigate(['/home']);
    }
    else{
      alert('Invalid username or password');
    }
   // alert('Invalid username or password');
    // this.router.navigate(['']);   
    
  
}
  // form: FormGroup;

  // constructor(
  //   private formBuilder: FormBuilder,
  //   private router: Router,
  //   private authService: AuthService
  // ) {
  //   this.form = this.formBuilder.group({
  //     email: ['', Validators.required],
  //     password: ['', Validators.required],
  //   });
  // }

  // onSubmit() {
  //   if (this.form.valid) {
  //     this.authService
  //       .login(this.form.value)
  //       .subscribe(() => this.router.navigate(['/dashboard']));
  //   }
  // }

}
