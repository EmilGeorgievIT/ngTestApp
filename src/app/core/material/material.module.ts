import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import  {MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatListModule
  ]
})
export class MaterialModule { }
