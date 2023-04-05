import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User';
//import { User } from 'src/app/core/components/form-valiadte/form-valiadte.component';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-resource-section',
  templateUrl: './resource-section.component.html',
  styleUrls: ['./resource-section.component.scss']
})
export class ResourceSectionComponent implements OnInit {

  constructor() { }


  ngOnInit() {
    //this.email = this.route.snapshot.paramMap.get('email');
  }



}
