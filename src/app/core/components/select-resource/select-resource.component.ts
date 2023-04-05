import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-resource',
  templateUrl: './select-resource.component.html',
  styleUrls: ['./select-resource.component.scss']
})
export class SelectResourceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Select: any = '-1';
  @Input() options: { label: string; value: any; }[] | undefined;
  selectedValue: any;

}
