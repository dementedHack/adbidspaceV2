import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { AuthService } from '../shared/services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    constructor(private authService: AuthService) {}
    email = '';
    password = '';
    confirmPassword = '';
    user: FormGroup;
    name = '';


    ngOnInit() {
      this.user = new FormGroup({
      name: new FormControl(''),
      account: new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),
        confirmPassword: new FormControl('')
      })
    });
    }

    onSignup() {
          console.log(this.user.value, this.user.valid);
          this.name = this.user.value.name;
          this.email = this.user.value.account.email;
          this.password = this.user.value.account.password;
          this.confirmPassword = this.user.value.account.confirmPassword;
          if (this.password === this.confirmPassword) {
            this.authService.signupWithEmail(this.email, this.password);
          } else {
            console.log('Not the same');
          }
    }
}
