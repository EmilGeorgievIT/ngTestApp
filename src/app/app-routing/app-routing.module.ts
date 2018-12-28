import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { PagenotfoundComponent } from '../components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
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
