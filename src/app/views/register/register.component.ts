import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule  } from '@angular/forms';
import { UsersService } from '@services/users/users.service'
import { ValidatorsUtils } from 'src/app/utils/validators';

@Component({
  selector: 'register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registryForm!: FormGroup;


  constructor(private usersService: UsersService, public validatorsUtils: ValidatorsUtils) {
    this.registryForm = this.initilizeFormPharmacyData();
  }

  confirmPassword: string = '';

  newUser = {
    name: '',
    age: null,
    email: '',
    password: ''
  };

  placeHolder = {
    name: 'Nombre',
    email: 'Email',
    password: 'Contraseña',
    confirmPassword: 'Repite la contraseña',
    submit: 'Enviar'
  };


  public initilizeFormPharmacyData = ( ) => {
    return new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [ Validators.required,this.validatorsUtils.customEmailValidator]),
      password: new FormControl('',  Validators.required),
      confirmPassword: new FormControl('',  Validators.required)
    })
  }
  // TODO create user
  // register() {
  //   this.usersService.register(this.newUser);
  // }


}
