import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatNativeDateModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {AsyncPipe} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { CalcbbdComponent } from './calcbbd/calcbbd.component';
import { BatchfinderComponent } from './batchfinder/batchfinder.component';
import { RecordsComponent } from './records/records.component';
import {MatDialogModule} from '@angular/material/dialog';
import { InsertdataComponent } from './insertdata/insertdata.component';
@NgModule({
  declarations: [AppComponent, NavbarComponent, CalcbbdComponent, BatchfinderComponent, RecordsComponent, InsertdataComponent],
  imports: [
    BrowserModule,
    MatTabsModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatButtonModule,
    MatMenuModule,
    AppRoutingModule,
    MatDialogModule,
    MatAutocompleteModule,
    AsyncPipe,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
