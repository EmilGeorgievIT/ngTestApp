import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { PagenotfoundComponent } from '../components/pagenotfound/pagenotfound.component';
import { LoginComponent } from '../components/auth/login/login.component';
import { RegisterComponent } from '../components/auth/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cars', loadChildren: '../components/cars/cars.routing#CarsRoutingModule' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    PagenotfoundComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
