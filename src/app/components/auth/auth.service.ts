import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: any;
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

    login(email: string, password: string) {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(data => {
        this.toastr.success('Signed in', 'Success', {
          timeOut: 2000
        });
        firebase.auth().currentUser.getIdToken();
        this.token = firebase.auth().currentUser.getIdToken();
        this.router.navigate(['/']);
       }).catch(error => {
        this.toastr.error(error.message, 'Warning', {
          timeOut: 2000
        });
       })
    }
    isIiLogged() {
      return this.token != null;
    }
}
