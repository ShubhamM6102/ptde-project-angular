import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss']
})
export class DashboardContentComponent implements OnInit {

  constructor() { }

 



options1 = ['Option 1-1', 'Option 1-2', 'Option 1-3'];
options2 = ['Option 2-1', 'Option 2-2', 'Option 2-3'];
options3 = ['Option 3-1', 'Option 3-2', 'Option 3-3'];
selectedOption1: any ='-1';
selectedOption2: any  ='-1';
selectedOption3: any  ='-1';
Select: any = '-1';
name?:string;
//dataArray = [];
dataArray: { option1?: string; option2?: string; option3?: string; }[] = [];
dataArra: { option1?: string; option2?: string; option3?: string; }[] = [];

addData() {
  this.dataArray.push({
    option1: this.selectedOption1,
    option2: this.selectedOption2,
    option3: this.selectedOption3
  });
  if(this.selectedOption1==='UPRRR'){
     this.name = "hello"
  }
  else{
    this.name= "bye"
  }
  console.log(this.dataArray);
  alert('Successfully Login');
  this.dataArra = this.dataArray;
  console.log(this.dataArra)
}

ngOnInit(): void {
 
}


}
