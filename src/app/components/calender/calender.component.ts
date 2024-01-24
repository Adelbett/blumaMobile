import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CalendarMode } from 'ionic2-calendar';
import { CalendarComponent } from 'ionic2-calendar';
import { calendarFormat } from 'moment';



@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],
})
export class CalenderComponent implements OnInit {
  eventsOURCE = [];
  viewTitle: String | undefined;


  calendar: any;



  @ViewChild(CalendarComponent) mycal: CalendarComponent | undefined;

  constructor() { }

  ngOnInit() {
    this.calendar = {
      mode: 'month' as CalendarMode
    };
  }
  onViewTitleChanged(title: any) {
    this.viewTitle = title;
  }

  back() {
    if (this.mycal) {
      this.mycal.slidePrev();
    }

  }
  next() {
    if (this.mycal) {
      this.mycal.slideNext();
    }
  }

}
