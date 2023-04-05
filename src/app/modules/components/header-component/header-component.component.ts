import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import * as feather from 'feather-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit , AfterViewInit{

  constructor() { }
   ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    feather.replace();
  }
  //username?: string;

//  constructor(private authService: AuthService) { }

  // ngOnInit() {
  //   this.username = this.authService.user?.username;
  // }
 

}
