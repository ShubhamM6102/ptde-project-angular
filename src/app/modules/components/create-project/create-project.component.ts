import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Post, Project } from 'src/app/models/dashboard';
import { ProjectService } from 'src/app/services/Project/project.service';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';


interface project{
  account:string;
  project_name:string;
  domain:string;
  client:string;
  team_size:string;
  owner:string;
  start_date:string;
  status:string;
  status_color:string;
}

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  Select: any = '-1';
  Account_Name='';
  Project_Name?:string;
    Email='';
    Email_input="";
    project?:string;
    allPost: Project[] =[];
    projects: project[] = [];
    abc:any = [];
    loadedPosts: Post[] = [];
    isFetching = false;
    error?:string;
     errorSub?: Subscription;
     team_size?:number;
    
     accounted:string='';

       accounts = [
    { label: 'UPRR', value: 'UPRR' },
    { label: 'T-Mobile', value: 'T-Mobile' },
    { label: 'Nike', value: 'Nike' },
    { label: 'Valmont', value: 'Valmont' },
  ];

  constructor(public  projectService:ProjectService,private http: HttpClient) { }
  disableSelect = new FormControl(false);
  ngOnInit() {
    this.fetchPosts();
    this.errorSub = this. projectService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });

    this.isFetching = true;
    this. projectService.fetchPosts().subscribe(
      posts => {
        this.isFetching = false;
        this.loadedPosts = posts;
      },
      error => {
        this.error = error.message;
      }
    );
  }
  modal(){
    this.project =  this.Project_Name;


  }
  reset(){
    this.Email='';
    this.Project_Name= ''


  }

  newEmployee = { account: '', project_name: '', domain: '' ,client:'',team_size:'',owner:'',start_date:'',status:'',status_color:''};


  addEmployee() {
    // send the newEmployee data to the server
    // and add it to the employees array when the response is received
  //  this.projectService.updateProjects().subscribe((projects: Project[]) => {

  //  });
  // }
  // this.bookmarksService.updateBookmarks(this.bookmarks);
 // this.projectService.updateProjects(this.newEmployee);
   this.http.post('https://ptde-f64b8-default-rtdb.firebaseio.com/project.json', this.newEmployee).subscribe(response => {
     console.log(response);
   });
  }

  fetchPosts() {
    this.http.get('https://ptde-f64b8-default-rtdb.firebaseio.com/project.json')
    .subscribe(project => {
      this.abc = project ;
      console.log(project);
    })
  }



  onCreatePost(postData: Post) {
    // Send Http request
    this.projectService.createAndStorePost(postData.account, postData.project_name, postData.domain, postData.client, postData.team_size, postData.owner, postData.start_date, postData.status);
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.projectService.fetchPosts().subscribe(
      posts => {
        this.isFetching = false;
        this.loadedPosts = posts;
      },
      error => {
        this.error = error.message;
        console.log(error);
      }
    );
  }
}
