import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CarsListModel } from './cars-list.model';


@Injectable({
  providedIn: 'root'
})
export class CarsService {
  url: string = 'https://ng-recipe-b718c.firebaseio.com/Cars';
  constructor(
    public http: HttpClient,
    ) { }

  getAllCars() {
    return this.http.get(`${this.url}.json`)
    .pipe(map((res: Response) => {
      const carsList: CarsListModel[] = [];
      const id = Object.keys(res);
      for (const i of id) {
        carsList.push(new CarsListModel(
          i,
          res[i].engine,
          res[i].fuel,
          res[i].model,
          res[i].year,
          res[i].manufacturer,
          res[i].transition,
          res[i].description,
          res[i].imagePath
        ));
      }
      return carsList;
    }));
  }
}
