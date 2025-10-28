import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-giveaway',
  templateUrl: './giveaway.component.html',
  styleUrls: ['./giveaway.component.scss'],
})
export class GiveawayComponent implements OnInit {
  weightlist = [
    {
      name: '100g',
      value: 100,
    },
    {
      name: '160g',
      value: 160,
    },
    {
      name: '180g',
      value: 180,
    },
    {
      name: '200g',
      value: 200,
    },
    {
      name: '250g',
      value: 250,
    },
    {
      name: '300g',
      value: 300,
    },
    {
      name: '350g',
      value: 350,
    },
    {
      name: '400g',
      value: 400
    },
    {
      name: '1000g',
      value: 1000
    },
    {
      name: '2000g',
      value: 2000
    },
    {
      name: '5000g',
      value: 5000
    },
  ];

  ngOnInit(): void {}

  giveawayCal: any | undefined;
  giveawaycount: FormGroup;

  constructor(private fb: FormBuilder) {
    this.giveawaycount = this.fb.group({
      actualweight: ['', Validators.required],
      weight: ['', Validators.required],
    });
  }

  calculateGiveaway(): void {
    const difference = this.giveawaycount.value.actualweight - this.giveawaycount.value.weight

    this.giveawayCal =  (difference / this.giveawaycount.value.weight) * 100
    
  }
  julianReset() {
    this.giveawayCal = '';
  }
}
