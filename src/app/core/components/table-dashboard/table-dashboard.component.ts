import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
  selector: 'app-table-dashboard',
  templateUrl: './table-dashboard.component.html',
  styleUrls: ['./table-dashboard.component.scss']
})
export class TableDashboardComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }

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

  projects: project[] = [];
  projectes: any[] = [];
  selectedDomain: string = '';
  selectedStatus: string = '';
  selectedAccount: string = '' ;
  itemsPerPage:number = 10;
  page = 1;
  // pageSize:number = 1000;
  currentPage = 1;
  pageSizeOptions = [ 10, 20];
  totalPages?: number;
  rowsPerPageOptions = [5, 10, 20];
  p:number=1;
  constructor(private http: HttpClient) {
  //  this.refreshCountries();
  }
  ngOnInit() {
    // this.http.get('assets/project.json').subscribe(data => {
    //   this.projects = data as any[];

      this.http.get(  'https://ptde-f64b8-default-rtdb.firebaseio.com/project.json').subscribe(data => {
        this.projects = data as any[];
    });
  
    // this.http.get('https://ptde-f64b8-default-rtdb.firebaseio.com/project.json').subscribe(data => {
    //   this.projects = data as any[];
    // });
  }

  get filteredEmployees() {
    return this.projects.filter(project => {
      return (
       // (!this.selectedId || project.id === +this.selectedId) &&
        //(!this.selectedName || project.name.toLowerCase().includes(this.selectedName.toLowerCase())) &&
        (!this.selectedAccount || project.account === this.selectedAccount) &&
        (!this.selectedStatus || project.status === this.selectedStatus) &&
        (!this.selectedDomain || project.domain === this.selectedDomain)
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
  get uniqueDomain() {
    return Array.from(new Set(this.projects.map(project => project.domain)));
  }
  get uniqueStatus() {
    return Array.from(new Set(this.projects.map(project => project.status)));
  }


	// refreshCountries() {
	// 	this.projectes = this.projects.map((country, i) => ({ id: i + 1, ...country })).slice(
	// 		(this.page - 1) * this.pageSize,
	// 		(this.page - 1) * this.pageSize + this.pageSize,
	// 	);
	// }


  newEmployee = { account: '', project_name: '', domain: '' ,client:'',team_size:'',owner:'',start_date:'',status:'',status_color:''};


addEmployee() {
  // send the newEmployee data to the server
  // and add it to the employees array when the response is received
  this.projects.push(this.newEmployee);
  // this.http.post('https://ptde-f64b8-default-rtdb.firebaseio.com/project.json', this.newEmployee).subscribe(response => {
  //   console.log(response);
  // });
  // this.http.put('assets/project.json', this.newEmployee)
  // .subscribe(() => {
  //   this.projects.push(this.newEmployee);
  //  this.newEmployee = { account: '', project_name: '', domain: '' ,client:'',team_size:'',owner:'',start_date:'',status:'',status_color:''};
  // console.log(this.projects)
  // });

}

}
