import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from '../cars/cars/cars.component';
import { CarComponent } from '../cars/car/car.component';
import { CarsRoutingModule } from './cars.routing';


@NgModule({
  imports: [
    CommonModule,
    CarsRoutingModule
  ],
  declarations: [
    CarComponent,
    CarsComponent
  ],
  exports: [
    CarComponent,
    CarsComponent
  ]
})
export class CarsModule { }
