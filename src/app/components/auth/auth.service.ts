import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  constructor(
    private toastr: ToastrService,
    private router: Router
    ) { }
  register(email: string, password: string) {
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(data => {
        firebase.auth().currentUser
        .getIdToken().then((token: string) => {
          this.token = token;
        });
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
    getToken(): string {
      return this.token;
    }
    login(email: string, password: string) {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(data => {
        this.toastr.success('Signed in', 'Success', {
          timeOut: 2000
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
      return this.getToken() !== null;
    }
}
