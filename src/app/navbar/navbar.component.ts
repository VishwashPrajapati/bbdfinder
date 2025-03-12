import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  dark = false;
  constructor(private service : AppService) { }

  ngOnInit(): void {
  }

  darkMode(value:boolean){
    this.dark = value
    this.service.dark.next(value)
  }

}
