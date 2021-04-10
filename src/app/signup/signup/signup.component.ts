import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/type';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  form: any = {};
  registerData!: User;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private registerService: RegisterService) {}

  ngOnInit() {}

  handleSignUpSubmit() {
    this.registerData = {
      username: this.form.username,
      password: this.form.password,
      confirmPassword: this.form.confirmPassword,
    };

    this.registerService.registerUser(this.registerData).subscribe(
      (data) => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      (error) => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
