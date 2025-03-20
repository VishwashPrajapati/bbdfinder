import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-calcbbd',
  templateUrl: './calcbbd.component.html',
  styleUrls: ['./calcbbd.component.scss'],
})
export class CalcbbdComponent {
  title = 'bbdfinder';

  year: number | string = '';
  tab = 'bbd';
  batch: any | undefined;
  calDya: any | undefined;
  today = new Date();
  isVisible = false;

  days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  dayLetter = '';

  calculatedDaysData = [
    {
      name: 30,
      data: '',
    },
    {
      name: 50,
      data: '',
    },
    {
      name: 63,
      data: '',
    },
    {
      name: 70,
      data: '',
    },
    {
      name: 72,
      data: '',
    },
    {
      name: 86,
      data: '',
    },
    {
      name: 90,
      data: '',
    },
    {
      name: 112,
      data: '',
    },
    {
      name: 120,
      data: '',
    },
    {
      name: 150,
      data: '',
    },
  ];

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
      this.letter[this.days.indexOf(this.today.toString().split(' ')[0])];

    this.getData(this.today);
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

    this.calculatedDaysData.map((obj, index) => {
      this.getFixedDate(currDate, obj.name);
      this.calculatedDaysData[index].data = String(
        new Date(this.getFixedDate(currDate, obj.name))
      );
    });

    const daycount = Math.min(Math.floor(dayDifference) + 1, 365)
      .toString()
      .padStart(3, '0');
    this.batch = `${year}${daycount}`;
    this.isVisible = true;
  }

  getRows(data: any[]) {
    let rows = [];
    for (let i = 0; i < data.length; i += 2) {
      rows.push(data.slice(i, i + 2));
    }
    return rows;
  }

  onDateChange(value: Date) {
    console.log(value);
    this.getData(value);
    this.dayLetter =
      this.letter[this.days.indexOf(value.toString().split(' ')[0])];
  }

  calculateDay(day: any, value: any) {
    this.calDya = this.getFixedDate(day, value);
  }

  julianReset() {
    this.onDateChange(this.today);
    this.myForm.setValue({ dateValue: this.today, numberValue: '' });
  }
}
