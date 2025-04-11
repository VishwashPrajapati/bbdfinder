import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

import { daysData,letter,days, daysDataInterface } from '../daysData';

@Component({
  selector: 'app-calcbbd',
  templateUrl: './calcbbd.component.html',
  styleUrls: ['./calcbbd.component.scss'],
})
export class CalcbbdComponent {

  year: number | string = '';
  batch: string = '';
  calDya: number |undefined;
  today = new Date();
  isVisible = false;

  dayLetter = '';

  filteredArray: daysDataInterface[] = [];

  myForm: FormGroup;
  julianCal: FormGroup;

  constructor(private fb: FormBuilder, private service: AppService) {
    this.myForm = this.fb.group({
      dateValue: [this.today, Validators.required],
      numberValue: ['', Validators.required],
    });
    this.julianCal = this.fb.group({
      julian: ['', Validators.required],
    });
    this.dayLetter =
      letter[days.indexOf(this.today.toString().split(' ')[0])];

    this.getData(this.today);
  }
  OnInit() {}
  activateToggle(ref:any):void {
    ref.opened = true;
  }

  result() {
    this.getData(this.myForm.value.dateValue);
    this.calculateDay(this.myForm.value.dateValue,this.myForm.value.numberValue);
  }

  getFixedDate(selectedDate: Date, nextDay: number) {
    return new Date(selectedDate).setDate(selectedDate.getDate() + nextDay);
  }

  getData(data: Date) {
    const fullYear = new Date(data).getFullYear();
    const year = fullYear % 100;;
    this.today.setHours(0, 0, 0, 0);
    const startdate:Date = new Date(fullYear, 0, 1);
    const dayDifference:number = (data.getTime() - startdate.getTime()) / (1000 * 60 * 60 * 24) + 1;

    daysData.map((obj, index) => {
      this.getFixedDate(data, obj.days);
      daysData[index].data = String(
        new Date(this.getFixedDate(data, obj.days))
      );
    });

    this.filteredArray = daysData.sort((a, b) => a.days - b.days);  

    const daycount = Math.min(Math.floor(dayDifference) + 1, 365)
  .toString()
  .padStart(3, '0');
    this.batch = `${year}${daycount}`;
    this.isVisible = true;
  }

  getRows(data: daysDataInterface[]) {
    let rows = [];
    for (let i = 0; i < data.length; i += 2) {
      rows.push(data.slice(i, i + 2));
    }
    return rows;
  }

  onDateChange(value:Date) {
    console.log(value)
    this.dayLetter =
    letter[days.indexOf(this.today.toString().split(' ')[0])];
    this.getData(value);
  }

  calculateDay(day: Date, value: number) {
    this.calDya = this.getFixedDate(day, value);
  }

  julianReset() {
    this.onDateChange(this.today);
    this.calDya = undefined;
    this.myForm.setValue({ dateValue: this.today, numberValue: '' });
  }
}
