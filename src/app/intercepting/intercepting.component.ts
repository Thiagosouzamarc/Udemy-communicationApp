import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intercepting',
  templateUrl: './intercepting.component.html',
  styleUrls: ['./intercepting.component.css']
})
export class InterceptingComponent implements OnInit {

  name = '';
  constructor() { }

  ngOnInit() {
  }

}
