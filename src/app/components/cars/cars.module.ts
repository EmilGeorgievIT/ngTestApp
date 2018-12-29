import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from '../cars/cars/cars.component';
import { CarsRoutingModule } from './cars.routing';
import { CarsDetailsComponent } from './cars-details/cars-details.component';
import { CarsCreateComponent } from './cars-create/cars-create.component';
import { CarsDeleteComponent } from './cars-delete/cars-delete.component';
import { CarsEditComponent } from './cars-edit/cars-edit.component';


@NgModule({
  imports: [
    CommonModule,
    CarsRoutingModule
  ],
  declarations: [
    CarsComponent,
    CarsDetailsComponent,
    CarsCreateComponent,
    CarsDeleteComponent,
    CarsEditComponent
  ],
  exports: [
    CarsComponent
  ]
})
export class CarsModule { }
