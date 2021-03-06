import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  curentUserData: any;
  constructor(
    private authService: AuthService) { }
  logOut() {
    this.authService.signOut();
  }
  ngOnInit() {
  }

}
