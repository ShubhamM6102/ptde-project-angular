export interface Country {
	id?: number;
	account: string;
  project_name:string;
  domain:string;
  client:string;
  team_size:number;
   owner:string;
   start_date:string;
   status:string;
   status_color:string;

// 	flag: string;
// 	area: number;
// 	population: number;
//   lastname:string;
// }
}

// export interface Post {
//   title: string;
//   content: string;
//   id?: string;
// }

export interface Post {
  id?: string;
	account: string;
  project_name:string;
  domain:string;
  client:string;
  team_size:number;
   owner:string;
   start_date:string;
   status:string;
   status_color?:string;

}

export class Project{
  constructor(
    id?: number,
   public account?: string,
   public  project_name?:string,
   public  domain?:string,
   public  client?:string,
   public  team_size?:number,
   public   owner?:string,
   public  start_date?:string,
   public  status?:string,
   public  status_color?:string,
 
   ) {
        
    }
     
}

export class Projects{
  constructor(public projects:Project[]){

  }
}


export const COUNTRIES: Country[] = [
	{
    account: 'UPRR',
    project_name:'UPRR Web App',
    domain:'Logistics',
    client:'UPRR',
    team_size:25,
     owner:'Johnson',
     start_date:'Aug 26,2022',
     status:'Done',
     status_color:'status-green.svg',


	},
  {
    account: 'T-Mobile',
    project_name:'Branding',
    domain:'Telecome',
    client:'T-Mobile',
    team_size:15,
     owner:'Benjamin',
     start_date:'Mar 26,2022',
     status:'In Progress',
     status_color:'status-orange.svg',
	},
  {
    account: 'UPRR',
    project_name:'UPRR Web App',
    domain:'Logistics',
    client:'UPRR',
    team_size:25,
     owner:'Johnson',
     start_date:'Aug 26,2022',
     status:'Done',
     status_color:'status-green.svg',
	},
  {
    account: 'T-Mobile',
    project_name:'IOS App',
    domain:'Telecome',
    client:'T-Mobile',
    team_size:15,
     owner:'Benjamin',
     start_date:'Mar 26,2022',
     status:'Risk',
     status_color:'status-red.svg',
	},
  {
    account: 'UPRR',
    project_name:'UPRR Web App',
    domain:'Logistics',
    client:'UPRR',
    team_size:25,
     owner:'Johnson',
     start_date:'Aug 26,2022',
     status:'Done',
     status_color:'status-green.svg',
	},
  {
    account: 'T-Mobile',
    project_name:'Branding',
    domain:'Telecome',
    client:'T-Mobile',
    team_size:15,
     owner:'Benjamin',
     start_date:'Mar 26,2022',
     status:'In Progress',
     status_color:'status-orange.svg',
	},
  {
    account: 'UPRR',
    project_name:'UPRR Web App',
    domain:'Logistics',
    client:'UPRR',
    team_size:25,
     owner:'Johnson',
     start_date:'Aug 26,2022',
     status:'Done',
     status_color:'status-green.svg',
	},
  {
    account: 'T-Mobile',
    project_name:'Branding',
    domain:'Telecome',
    client:'T-Mobile',
    team_size:15,
     owner:'Benjamin',
     start_date:'Mar 26,2022',
     status:'In Progress',
     status_color:'status-orange.svg',
	},
  {
    account: 'UPRR',
    project_name:'UPRR Web App',
    domain:'Logistics',
    client:'UPRR',
    team_size:25,
     owner:'Johnson',
     start_date:'Aug 26,2022',
     status:'Not Started',
     status_color:'status-blue.svg',
	},
  {
    account: 'T-Mobile',
    project_name:'Branding',
    domain:'Telecome',
    client:'T-Mobile',
    team_size:15,
     owner:'Benjamin',
     start_date:'Mar 26,2022',
     status:'In Progress',
     status_color:'status-orange.svg',
	},
  {
    account: 'UPRR',
    project_name:'UPRR Web App',
    domain:'Logistics',
    client:'UPRR',
    team_size:25,
     owner:'Johnson',
     start_date:'Aug 26,2022',
     status:'Done',
     status_color:'status-green.svg',
	},
  {
    account: 'UPRR',
    project_name:'UPRR Web App',
    domain:'Logistics',
    client:'UPRR',
    team_size:25,
     owner:'Johnson',
     start_date:'Aug 26,2022',
     status:'Done',
     status_color:'status-green.svg',
	},
  {
    account: 'T-Mobile',
    project_name:'Branding',
    domain:'Telecome',
    client:'T-Mobile',
    team_size:15,
     owner:'Benjamin',
     start_date:'Mar 26,2022',
     status:'In Progress',
     status_color:'status-orange.svg',
	},
  {
    account: 'UPRR',
    project_name:'UPRR Web App',
    domain:'Logistics',
    client:'UPRR',
    team_size:25,
     owner:'Johnson',
     start_date:'Aug 26,2022',
     status:'Done',
     status_color:'status-green.svg',
	},
  {
    account: 'T-Mobile',
    project_name:'IOS App',
    domain:'Telecome',
    client:'T-Mobile',
    team_size:15,
     owner:'Benjamin',
     start_date:'Mar 26,2022',
     status:'Risk',
     status_color:'status-red.svg',
	},
  {
    account: 'UPRR',
    project_name:'UPRR Web App',
    domain:'Logistics',
    client:'UPRR',
    team_size:25,
     owner:'Johnson',
     start_date:'Aug 26,2022',
     status:'Done',
     status_color:'status-green.svg',
	},
  {
    account: 'T-Mobile',
    project_name:'Branding',
    domain:'Telecome',
    client:'T-Mobile',
    team_size:15,
     owner:'Benjamin',
     start_date:'Mar 26,2022',
     status:'In Progress',
     status_color:'status-orange.svg',
	},
  {
    account: 'UPRR',
    project_name:'UPRR Web App',
    domain:'Logistics',
    client:'UPRR',
    team_size:25,
     owner:'Johnson',
     start_date:'Aug 26,2022',
     status:'Done',
     status_color:'status-green.svg',
	},
  {
    account: 'T-Mobile',
    project_name:'Branding',
    domain:'Telecome',
    client:'T-Mobile',
    team_size:15,
     owner:'Benjamin',
     start_date:'Mar 26,2022',
     status:'In Progress',
     status_color:'status-orange.svg',
	},
  {
    account: 'UPRR',
    project_name:'UPRR Web App',
    domain:'Logistics',
    client:'UPRR',
    team_size:25,
     owner:'Johnson',
     start_date:'Aug 26,2022',
     status:'Done',
     status_color:'status-green.svg',
	},
  {
    account: 'T-Mobile',
    project_name:'Branding',
    domain:'Telecome',
    client:'T-Mobile',
    team_size:15,
     owner:'Benjamin',
     start_date:'Mar 26,2022',
     status:'In Progress',
     status_color:'status-orange.svg',
	},
  {
    account: 'UPRR',
    project_name:'UPRR Web App',
    domain:'Logistics',
    client:'UPRR',
    team_size:25,
     owner:'Johnson',
     start_date:'Aug 26,2022',
     status:'Done',
     status_color:'status-green.svg',
	},
];