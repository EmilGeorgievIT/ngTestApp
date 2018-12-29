import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) { }
  logged: boolean;
  token: any;

  ngOnInit() {
    this.token = this.authService.getToken();
    this.logged = this.authService.isLogged();
  }

}
