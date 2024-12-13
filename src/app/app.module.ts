import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, MatDatepickerModule, MatInputModule, MatFormFieldModule, MatNativeDateModule,MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
