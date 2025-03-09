import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { CalcbbdComponent } from './calcbbd/calcbbd.component';
import { BatchfinderComponent } from './batchfinder/batchfinder.component';
import { RecordsComponent } from './records/records.component';
const appRoutes: Routes = [
  {
    path: 'calcbbbd',
    component: CalcbbdComponent,
  },
  {
    path: 'batchfinder',
    component: BatchfinderComponent,
  },
  {
    path: 'records',
    component: RecordsComponent,
  },
  {
    path: '',
    redirectTo: 'calcbbbd',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
