import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bbdfinder';

  year: number | undefined;
  daycount: any;
  thirteeDays: any | undefined;
  fiftyDays: any | undefined;
  sixtyThreeDays: any | undefined;
  nineTee: any | undefined;
  oneTwoDays: any | undefined;
  oneFiveDays: any | undefined;
  calDya: any | undefined;
  today: any | undefined;

  days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  letter = ["A", "B", "C", "D", "E", "F", "G"];
  dayLetter = "";


  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.today = new Date();

    this.myForm = this.fb.group({
      dateValue: [this.today, Validators.required],
      numberValue: ['', Validators.required],
    });
    this.dayLetter = this.letter[this.days.findIndex((x) => x === this.today.toString().split(" ")[0])]

    this.getData(this.today);
  }
  OnInit() { }

  result() {
    const formsValues = this.myForm.value;
    this.getData(this.myForm.value.dateValue);
    this.calculateDay(formsValues.dateValue, formsValues.numberValue);
  }

  getFixedDate(selectedDate: Date, nextDay: any) {
    var datebyValue = new Date(selectedDate); // Now
    return datebyValue.setDate(datebyValue.getDate() + nextDay); // Set now + 30 days as the new date
  }

  getData(data: Date | string) {
    this.year = Number(new Date(data).getFullYear().toString().substr(-2));
    var startdate = new Date('Jan 01,' + this.year);
    var currDate = new Date(data);
    var untilltime = currDate.getTime() - startdate.getTime();

    this.thirteeDays = this.getFixedDate(currDate, 30);
    this.fiftyDays = this.getFixedDate(currDate, 50);
    this.sixtyThreeDays = this.getFixedDate(currDate, 63);
    this.nineTee = this.getFixedDate(currDate, 90);
    this.oneTwoDays = this.getFixedDate(currDate, 120);
    this.oneFiveDays = this.getFixedDate(currDate, 150);

    this.daycount = Math.floor(untilltime / (1000 * 60 * 60 * 24)) + 1;

    if (this.daycount >= 365) {
      this.daycount = 365;
    }
    if (this.daycount >= 10 && this.daycount <= 99) {
      this.daycount = "0" + this.daycount;
    }
    if (this.daycount <= 9) {
      this.daycount = "00" + this.daycount;
    }

  }

  calculateDay(day: any, value: any) {
    this.calDya = this.getFixedDate(day, value);
  }
}
