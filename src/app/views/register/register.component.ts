import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '@services/users/users.service'

@Component({
  selector: 'register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private usersService: UsersService) {}

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
    submit: 'enviar!'
  };

  // TODO create user
  // register() {
  //   this.usersService.register(this.newUser);
  // }


}
