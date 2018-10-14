import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    email = '';
    password = '';
    user: FormGroup;
    subscription: Subscription;
    isLoggedIn: any;

    constructor(public router: Router, private authService: AuthService) {}

    ngOnInit() {
        this.user = new FormGroup({
        name: new FormControl(''),
        account: new FormGroup({
          email: new FormControl(''),
          password: new FormControl(''),
          confirmPassword: new FormControl('')
        })
      });
      if (localStorage.getItem('isLoggedIn') === 'true') {
        this.router.navigate(['dashboard']);
      }
      this.authService.isLoggedIn.subscribe((isLoggedIn: boolean) => {
        this.router.navigate(['/dashboard']);
        console.log(isLoggedIn);
      });
    }

    onLoginButtonClicked() {

      this.email = this.user.value.account.email;
      this.password = this.user.value.account.password;
      this.authService.emailLogin(this.email, this.password);

      // setTimeout(() =>{
      //
      // }, 100);
      this.authService.isLoggedIn.subscribe(
      (isLoggedIn: boolean) => {
        this.router.navigate(['/dashboard']);
        setTimeout(() =>{
          this.router.navigate(['/dashboard']);
        }, 100);
      }
    );
  }

    onLogout() {
      //this.authService.logout();

      //console.log(this.isLoggedIn);
    }
}
