import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarsService } from '../cars.service';
import { CarsListModel } from '../cars-list.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  allCars$: Observable<CarsListModel[]>;
  constructor(public carsService: CarsService) { }
  ngOnInit() {
    this.allCars$ = this.carsService
    .getAllCars();
  }

}
