import { Component, OnInit } from '@angular/core';
export class User {
  public name?: string;
  public email?: string;
  public password?: string;
  public hobbies?: string;
}
@Component({
  selector: 'app-form-valiadte',
  templateUrl: './form-valiadte.component.html',
  styleUrls: ['./form-valiadte.component.scss']
})
export class FormValiadteComponent implements OnInit {

  model = new User();

  Hobbies: string[] = [
      'Acrobatics',
      'Acting',
      'Animation',
      'Astronomy',
      'Baking'
  ];

  constructor() { }

  onSubmit(form: { value: any; }) {
      console.log(form.value)
  }
  //constructor() { }

  ngOnInit(): void {
  }

}
