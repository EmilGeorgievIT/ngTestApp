import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../auth/register/register.component';
import { LoginComponent } from '../auth/login/login.component';
import { NavbarComponent } from '../share/navbar/navbar.component';
import { FooterComponent } from '../share/footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/core/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ReactiveFormsModule
  ],
  providers: [AuthService]
})
export class SharedModule { }
