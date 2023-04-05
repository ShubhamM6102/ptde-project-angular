import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { COUNTRIES, Country } from 'src/app/models/resource';

@Component({
  selector: 'app-resource-table',
  templateUrl: './resource-table.component.html',
  styleUrls: ['./resource-table.component.scss']
})
export class ResourceTableComponent implements OnInit {

  // account = [
  //   { label: 'UPRR', value: 'UPRR' },
  //   { label: 'T-Mobile', value: 'T-Mobile' },
  //   { label: 'Nike', value: 3 },
  //   { label: 'Valmont', value: 4 },
  // ];

  // domain = [
  //   { label: 'Logistics', value: 'Logistics' },
  //   { label: 'Telecome', value:  'Telecome' },
  //   { label: 'Vue', value: 'Vue' },
  //   { label: 'Node Js', value: 'Node Js'},
  // ];

  // status = [
  //   { label: 'Done', value: 'Done'},
  //   { label: 'In Progress', value:'In Progress'},
  //   { label: 'Risk', value: 'Risk'},
  //   { label: 'Not Started', value: 'Not Started'},
  // ];

  projects: any[] = [];
  selectedDomain: string = '';
  selectedTechnology: string = '';
  selectedAccount: string = '' ;
  itemsPerPage = 10;
  currentPage = 1;
  pageSizeOptions = [ 10, 20];
  totalPages?: number;

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get('assets/findResource.json').subscribe(data => {
      this.projects = data as any[];
    });
  }

  get filteredEmployees() {
    return this.projects.filter(project => {
      return (
       // (!this.selectedId || project.id === +this.selectedId) &&
        //(!this.selectedName || project.name.toLowerCase().includes(this.selectedName.toLowerCase())) &&
        (!this.selectedAccount || project.account === this.selectedAccount) &&
        (!this.selectedTechnology || project.technology === this.selectedTechnology) 
       // (!this.selectedDomain || project.domain === this.selectedDomain)
      );
    });
  }

  // ngOnInit() {
  //   this.totalPages = Math.ceil(this.filteredEmployees.length / this.itemsPerPage);
  // //  this.totalRow=this.filteredEmployees.length;
  // }

  getPaginatedEmployees() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredEmployees.slice(start, end);
  }
  get totalRows() {
    return this.filteredEmployees.length;
  }

  get uniqueAccount() {
    return Array.from(new Set(this.projects.map(project => project.account)));
  }

  get uniqueTechnology() {
    return Array.from(new Set(this.projects.map(project => project.technology)));
  }


  newEmployee = { account: '', project_name: '', domain: '' ,client:'',team_size:'',owner:'',start_date:'',status:'',status_color:''};


addEmployee() {
  // send the newEmployee data to the server
  // and add it to the employees array when the response is received
  this.projects.push(this.newEmployee);

  // this.http.put('assets/project.json', this.newEmployee)
  // .subscribe(() => {
  //   this.projects.push(this.newEmployee);
  //  this.newEmployee = { account: '', project_name: '', domain: '' ,client:'',team_size:'',owner:'',start_date:'',status:'',status_color:''};
  // console.log(this.projects)
  // });

}
}
