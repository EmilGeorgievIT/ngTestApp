import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { ActivatedRoute } from '@angular/router';
import { CarsListModel } from '../cars-list.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cars-details',
  templateUrl: './cars-details.component.html',
  styleUrls: ['./cars-details.component.css']
})
export class CarsDetailsComponent implements OnInit {
  id: string;
  car: CarsListModel;
  constructor(
    public carsService: CarsService,
    public router: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
    this.carsService
    .getCarById(this.id).subscribe((data) => {
      this.car = data;
    });
  }

}
