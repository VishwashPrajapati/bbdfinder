import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bbdfinder';

  year: number | string = '';
  day: any | undefined;
  tab = 'bbd';
  batch: any | undefined;
  daycount: any;
  thirteeDays: any | undefined;
  fiftyDays: any | undefined;
  sixtyThreeDays: any | undefined;
  nineTee: any | undefined;
  oneTwoDays: any | undefined;
  oneFiveDays: any | undefined;
  calDya: any | undefined;
  today: any | undefined;
  isVisible = false;

  julianDates: any | undefined;

  days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  dayLetter = '';

  myForm: FormGroup;
  julianCal: FormGroup;

  darkMode = false;

  constructor(private fb: FormBuilder, private service: AppService) {
    this.today = new Date();
    this.myForm = this.fb.group({
      dateValue: [this.today, Validators.required],
      numberValue: ['', Validators.required],
    });
    this.julianCal = this.fb.group({
      julian: ['', Validators.required],
    });
    this.dayLetter =
      this.letter[this.days.indexOf(this.today.toString().split(' ')[0])];

    this.getData(this.today);
    this.service.dark.subscribe((res) => {
      this.darkMode = res;
    });
  }
  OnInit() {}
  activateToggle(ref: any) {
    ref.opened = true;
  }

  result() {
    const formsValues = this.myForm.value;
    this.getData(this.myForm.value.dateValue);
    this.calculateDay(formsValues.dateValue, formsValues.numberValue);
  }

  getFixedDate(selectedDate: Date, nextDay: any) {
    return new Date(selectedDate).setDate(selectedDate.getDate() + nextDay);
  }

  getData(data: Date | string) {
    const year = new Date(data).getFullYear() % 100;

    const startdate: any = new Date(`Jan 01,` + year);
    const currDate: any = new Date(data);
    const dayDifference = (currDate - startdate) / (1000 * 60 * 60 * 24);

    const calculateFixedDates = (days: any) =>
      this.getFixedDate(currDate, days);
    [
      this.thirteeDays,
      this.fiftyDays,
      this.sixtyThreeDays,
      this.nineTee,
      this.oneTwoDays,
      this.oneFiveDays,
    ] = [30, 50, 63, 90, 120, 150].map(calculateFixedDates);

    this.daycount = Math.min(Math.floor(dayDifference) + 1, 365)
      .toString()
      .padStart(3, '0');
    this.batch = `${year}${this.daycount}`;
    this.isVisible = true;
  }

  calculateDay(day: any, value: any) {
    this.calDya = this.getFixedDate(day, value);
  }

  isLeapYear(year: number): boolean {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  }

  calculateJulian(): void {
    const julian = this.julianCal.value.julian.toString();

    if (julian.length <= 3) {
      this.julianDates = new Date(
        new Date().getFullYear(),
        0,
        +julian
      ).getTime();
    } else if (julian.length === 4) {
      alert('Please enter at least 3 digits or 5 digits');
    } else {
      const year = 2000 + +julian.slice(0, 2);
      const dayOfYear = +julian.slice(2);
      this.julianDates = new Date(year, 0, dayOfYear).getTime();
    }
  }

  julianReset(type?: string) {
    if (type === 'julian') {
      this.julianCal.reset();
      this.julianDates = '';
    } else {
      this.myForm.reset();
      this.calDya = '';
    }
  }
  searchTab(type?: string) {
    if (type === 'bbd') {
      this.tab = type;
    } else {
      this.tab = 'date';
    }
  }
}
