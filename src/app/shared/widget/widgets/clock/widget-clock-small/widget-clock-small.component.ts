import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'sr-widget-clock-small',
  templateUrl: './widget-clock-small.component.html',
  styleUrls: ['./widget-clock-small.component.scss']
})
export class WidgetClockSmallComponent implements OnInit {

  currentTime: string = "HH:mm";
  currentDate: string = "dd.MM.YYYY";
  time: Date = new Date();

  ngOnInit(): void {
    this.fetchTime();
  }

  fetchTime(): void {
    console.log("tick")
    this.time = new Date();
    this.currentTime = ("0" + this.time.getHours()).slice(-2) + ":" + ("0" + this.time.getMinutes()).slice(-2);
    this.currentDate = this.time.getDate() + "." + (this.time.getMonth() + 1) + "." + this.time.getFullYear();
  }


}
