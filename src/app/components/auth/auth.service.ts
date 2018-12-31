import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserInfo } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  userData: UserInfo;
  constructor(
    private toastr: ToastrService,
    private router: Router
    ) { }
  register(email: string, password: string) {
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(data => {
        this.toastr.success('Registered', 'Success', {
          timeOut: 3000 });
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        console.log(error);
        this.toastr.error(error.message, 'Warning', {
          timeOut: 3000 });
        });
    }
    getToken() {
      return this.token;
    }
    getUser(): UserInfo {
      if (this.token != null) {
        firebase.auth().currentUser.providerData.map((data) => {
          this.userData = data;
        });
        return this.userData;
      }
    }
    login(email: string, password: string) {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(data => {
        this.toastr.success('Signed in', 'Success', {
          timeOut: 2000
        });
        firebase.auth().currentUser
        .getIdToken().then((token: string) => {
          this.token = token;
        });
        this.router.navigate(['/']);
       }).catch(error => {
        this.toastr.error(error.message, 'Warning', {
          timeOut: 2000
        });
       })
    }
    signOut() {
      firebase.auth().signOut()
      .then(data => {
        this.router.navigate(['/']);
        this.token = null;
      }).catch(error => {
        console.log(error);
      })
    }
    isLogged(): boolean {
      return this.getToken() != null;
    }
}
