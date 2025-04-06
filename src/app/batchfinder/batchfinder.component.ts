import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-batchfinder',
  templateUrl: './batchfinder.component.html',
  styleUrls: ['./batchfinder.component.scss'],
})
export class BatchfinderComponent {
  julianDates: any | undefined;
  julianCal: FormGroup;

  
  constructor(private fb: FormBuilder) {
    this.julianCal = this.fb.group({
      julian: ['', Validators.required],
    });
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
  julianReset() {
    this.julianDates = '';
  }
}
