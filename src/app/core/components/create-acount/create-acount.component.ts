import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-create-acount',
  templateUrl: './create-acount.component.html',
  styleUrls: ['./create-acount.component.scss']
})
export class CreateAcountComponent implements OnInit {
  @Input() text:string | undefined;
  @Input() btnClass:string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
