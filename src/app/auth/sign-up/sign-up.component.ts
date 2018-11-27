import { NgForm, FormBuilder, Validators, FormControl, FormGroupDirective } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  constructor(private fb: FormBuilder) { }
  signUpForm = this.fb.group({
    userName: ['',
      [
        Validators.required,
        Validators.email
      ]
    ],
    password: ['', Validators.required]
  });
  matcher = new MyErrorStateMatcher();

  ngOnInit() {
  }
}
