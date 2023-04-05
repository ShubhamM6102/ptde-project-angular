import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, Subject, throwError } from 'rxjs';
import { Projects, Project, Post } from 'src/app/models/dashboard';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor( private http: HttpClient) { }
  public fetchProjects():Observable<Project[]> {
    return this.http.get<Project[]>('https://ptde-f64b8-default-rtdb.firebaseio.com/project.json');
  }
     public updateProjects(projects: Project[]):void{
    this.http.put("https://ptde-f64b8-default-rtdb.firebaseio.com/project.json",projects).subscribe();
    this.fetchProjects();

  }
  error = new Subject<string>();

  createAndStorePost(account: string, project_name: string, domain:string, client:string, team_size: number, owner:string, start_date:string, status:string ) {
    const postData: Post = { account: account, project_name: project_name, domain: domain, client: client, team_size:team_size, owner:owner,start_date:start_date,status:status };
    this.http
      .post<{ name: string }>(
        'https://tdpe-cffe7-default-rtdb.firebaseio.com/posts.json',postData).subscribe(responseData => {
          console.log(responseData);
        },
        error => {
          this.error.next(error.message);
        }
      );
  }


  fetchPosts() {
    return this.http
      .get<{ [key: string]: Post }>(
        'https://tdpe-cffe7-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        map(responseData => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
        catchError(errorRes => {
          // Send to analytics server
          return throwError(errorRes);
        })
      );
  }

  


}
