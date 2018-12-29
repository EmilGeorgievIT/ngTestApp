import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { CarsEditComponent } from './cars-edit/cars-edit.component';
import { CarsDeleteComponent } from './cars-delete/cars-delete.component';
import { CarsCreateComponent } from './cars-create/cars-create.component';
import { CarsDetailsComponent } from './cars-details/cars-details.component';

const carsRoutes: Routes = [
  { path: 'cars', component: CarsComponent },
  { path: 'create', component: CarsCreateComponent },
  { path: 'delete/:id', component: CarsDeleteComponent },
  { path: 'cars/details/:id', component: CarsDetailsComponent },
  { path: 'edit/:id', component: CarsEditComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(carsRoutes)
  ],
  declarations: [
  ],
  exports: [
    RouterModule
  ]
})
export class CarsRoutingModule { }
