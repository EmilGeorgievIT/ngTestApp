import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private toastr: ToastrService) { }
  register(email: string, password: string) {
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(data => console.log(data))
      .catch((error) => {
        console.log(error);
        this.toastr.error(error.message, 'Warning', {
          timeOut: 3000 });
        });
    }
}
