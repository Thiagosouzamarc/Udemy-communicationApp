import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {

  // @ViewChild('stopwatch2')  
  private myTimer: TimerComponent
  constructor() { }

  // @ViewChild("myPi")
  private myPi: ElementRef;

  ngOnInit() {
  }

  start(){
    this.myTimer.start()
  }

  stop(){
    this.myTimer.stop()
  }

  clear(){
    this.myTimer.clear();
  }

}
