import { Component, OnInit } from '@angular/core';
import { CarsCreateModel } from '../cars-create';
import { CarsService } from '../cars.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars-create',
  templateUrl: './cars-create.component.html',
  styleUrls: ['./cars-create.component.css']
})
export class CarsCreateComponent implements OnInit {
  carsModel: CarsCreateModel;
  constructor(
    public carsService: CarsService,
    public toastr: ToastrService,
    public route: Router
    ) {
    this.carsModel = new CarsCreateModel('', '', '', '', '', '', '', '', '');
   }
   onSubmit(createCar) {
     if (createCar.controls.model.errors) {
       return;
     }
     this.carsService
     .createCar(this.carsModel)
     .subscribe(() => {
       this.toastr.success('Cars created', 'Success');
       this.route.navigate(['/cars']);
     });
      console.log(createCar.value);
   }

  ngOnInit() {
  }
}
