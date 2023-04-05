import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  email?: string;
  password?: string;

  constructor() { }
  users = [
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user2@example.com', password: 'password2' },
    { email: 'user3@example.com', password: 'password3' },
  ];
  ngOnInit(): void {
  }

  login() {
    const user = this.users.find(u => u.email === this.email && u.password === this.password);
    if (user) {
      console.log('Login successful!');
      alert('Login successful!');
    } else {
      console.log('Email or password is incorrect');
      alert('Email or password is incorrect');
    }
  }

}
