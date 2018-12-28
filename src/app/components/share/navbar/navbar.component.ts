import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from '../../auth/auth.service';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('drawer') drawer: MatSidenav;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService) { }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );

  hideMenu(): void {
    this.drawer.open();
    setTimeout(() => {
      this.drawer.close();
    }, 3000);
  }
  logOut() {
    this.authService.signOut();
  }

  ngOnInit() {
  }

}
