import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  private interval: any;

  private miliseconds: number = 0;

  private running = false;

  constructor() { }

  ngOnInit() {
  }

  start(){
    if(!this.running) {
      this.interval = setInterval(()=>{
        this.miliseconds +=50
      }, 50);
      this.running = true
    }
  }

  stop(){
    if(this.running){
      clearInterval(this.interval);
      this.running = false;
    }
  }

  clear(){
    this.miliseconds = 0;
  }

  private round(n: number): number {
    return Math.round(n);
  }

}
