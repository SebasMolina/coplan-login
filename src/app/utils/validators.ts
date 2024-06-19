import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class ValidatorsUtils {
  public customEmailValidator(control: AbstractControl) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const email = control.value;

    if (emailPattern.test(email) || email.length == 0) {
      return null;
    };

    return { invalidEmail: true };
  };

};
