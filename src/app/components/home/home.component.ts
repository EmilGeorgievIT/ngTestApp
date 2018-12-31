import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { UserInfo } from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userData: UserInfo;
  constructor(private authService: AuthService) { }
  // showData(): UserInfo {
  // }
  ngOnInit() {
    if (this.authService.isLogged()) {
      this.userData = this.authService.getUser();
    }
  }

}
