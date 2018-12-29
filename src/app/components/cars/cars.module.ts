import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../core/material/material.module';
import { CarsRoutingModule } from './cars.routing';

import { CarsComponent } from '../cars/cars/cars.component';
import { CarsDetailsComponent } from './cars-details/cars-details.component';
import { CarsCreateComponent } from './cars-create/cars-create.component';
import { CarsDeleteComponent } from './cars-delete/cars-delete.component';
import { CarsEditComponent } from './cars-edit/cars-edit.component';
import { ToastrModule } from 'ngx-toastr';
import { CarsService } from './cars.service';


@NgModule({
  imports: [
    CommonModule,
    CarsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ToastrModule.forRoot(),
  ],
  declarations: [
    CarsComponent,
    CarsDetailsComponent,
    CarsCreateComponent,
    CarsDeleteComponent,
    CarsEditComponent
  ],
  exports: [
    CarsComponent,
    CarsDetailsComponent,
    CarsCreateComponent,
    CarsDeleteComponent,
    CarsEditComponent
  ],
  providers: [
    CarsService
  ]
})
export class CarsModule { }
