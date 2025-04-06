import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { daysData,letter,days,daysDataInterface,productData } from '../daysData';
@Component({
  selector: 'app-insertdata',
  templateUrl: './insertdata.component.html',
  styleUrls: ['./insertdata.component.scss']
})
export class InsertdataComponent {
  formData: FormGroup;
  filteredData: daysDataInterface[] = [];
  
  constructor(private fb: FormBuilder) {
    this.filteredData = daysData.sort((a,b) => a.days - b.days)
    this.formData = this.fb.group({
      name: ['', Validators.required],
    });
  }

  add(){

  }

}
