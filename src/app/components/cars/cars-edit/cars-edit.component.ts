import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarsCreateModel } from '../cars-create';
import { CarsListModel } from '../cars-list.model';

@Component({
  selector: 'app-cars-edit',
  templateUrl: './cars-edit.component.html',
  styleUrls: ['./cars-edit.component.css']
})
export class CarsEditComponent implements OnInit {
  car: CarsListModel;
  id: string;
  constructor(
    public carsService: CarsService,
    public router: Router,
    public activeRouter: ActivatedRoute,
    public toastr: ToastrService
    ) { }

  editCars() {
    const body = {
      [this.id] : this.car
    };
    this.carsService.editCar(body)
    .subscribe((data) => {
      this.toastr.success('Successful edit car', 'Success');
      this.router.navigate(['/cars']);
    }, (error) => {
      this.toastr.error(error, 'Warning');
    });
  }
  ngOnInit() {
    this.id = this.activeRouter.snapshot.params['id'];
    this.carsService.getCarById(this.id)
    .subscribe((data) => {
      this.car = data;
    });
  }

}
