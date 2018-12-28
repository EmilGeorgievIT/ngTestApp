import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  register(email: string, password: string) {
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(data => console.log(data))
      .catch((error) => console.log(error));
  }
}
