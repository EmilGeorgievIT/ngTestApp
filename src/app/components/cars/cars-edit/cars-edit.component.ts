import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarsCreateModel } from '../cars-create';

@Component({
  selector: 'app-cars-edit',
  templateUrl: './cars-edit.component.html',
  styleUrls: ['./cars-edit.component.css']
})
export class CarsEditComponent implements OnInit {
  editCar: CarsCreateModel;
  constructor(
    public carsService: CarsService,
    public router: Router,
    public toastr: ToastrService
    ) { }
    onSubmit() {
    }
  ngOnInit() {

  }

}
