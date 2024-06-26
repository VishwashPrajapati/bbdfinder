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
  daycount: number | undefined;
  thirteeDays: any | undefined;
  fiftyDays: any | undefined;
  sixtyThreeDays: any | undefined;
  nineTee: any | undefined;
  oneTwoDays: any | undefined;
  oneFiveDays: any | undefined;
  calDya: any | undefined;

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      dateValue: ['', Validators.required],
      numberValue: ['', Validators.required],
    });
    var todayDate = new Date();
    console.log('todayDate', todayDate);
    this.getData(todayDate);
  }
  OnInit() {}

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
    console.log(this.daycount);

    if (this.daycount > 365) {
      this.daycount = 365;
    } else if (this.daycount < 100) {
      this.daycount = this.daycount;
      console.log('from dafshgsdgdogjo', this.daycount);
    }
  }

  calculateDay(day: any, value: any) {
    this.calDya = this.getFixedDate(day, value);
  }
}
