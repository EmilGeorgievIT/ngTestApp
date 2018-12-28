import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from '../cars/cars/cars.component';
import { CarComponent } from '../cars/car/car.component';


@NgModule({
  imports: [
    CommonModule
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
