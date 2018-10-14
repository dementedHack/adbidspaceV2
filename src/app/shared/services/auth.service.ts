import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = new Subject();

  constructor(public angularFireAuth: AngularFireAuth) { }

  signup(email: string, password:string){
    this.angularFireAuth
    .auth.createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
  }

  emailLogin(email: string, password: string) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        //this.authState = user
        console.log('Successfully signed in');
        localStorage.setItem('isLoggedin', 'true');
        this.isLoggedIn.next(true);
      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }

  logout () {
    this.angularFireAuth.auth.signOut().then(function() {
        // Sign-out successful.
        console.log("Logout successful");

        localStorage.clear(); // This works but not recommended
        //localStorage.removeItem("firebase:host:project-xxxxxxxxxx.firebaseio.com"); This is currently am doing in my project
        this.isLoggedIn.next(false);
      }, function(error) {
        // An error happened.
        console.log(error);

      });
  }
}
