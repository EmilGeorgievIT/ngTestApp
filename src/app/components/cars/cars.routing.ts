import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { CarsComponent } from './cars/cars.component';

const carsRoutes: Routes = [
  { path: '', component: CarsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(carsRoutes)
  ],
  declarations: [
    CarsComponent
  ],
  exports: [
    RouterModule
  ]
})
export class CarsRoutingModule { }
