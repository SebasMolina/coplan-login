import { Injectable } from '@angular/core';
import { User } from '@interfaces/users/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: User[] = [
    {
      _id: '1',
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      password: 'password123',
    },
    {
      _id: '2',
      name: 'Bob Smith',
      email: 'bob.smith@example.com',
      password: 'securepass456',
    },
    {
      _id: '3',
      name: 'Charlie Brown',
      email: 'charlie.brown@example.com',
      password: 'mypassword789',
    },
    {
      _id: '4',
      name: 'Diana Prince',
      email: 'diana.prince@example.com',
      password: 'wonderwoman',
    },
    {
      _id: '5',
      name: 'Ethan Hunt',
      email: 'ethan.hunt@example.com',
      password: 'imfagent007',
    }
  ];

  constructor() { }

  register(user: User): string {

    switch (user) {
      case this.users.find(u => u.email === user.email):
        return "Ya existe un usuario con ese correo electrónico";
      case this.users.find(u => u.name === user.name):
        return "Ya existe un usuario con ese nombre";
    }

    switch (user.password.length) {
      case (< 8 > user.password.length):
        return "La contraseña debe tener al menos 8 caracteres";
      case (< 16 > user.password.length):
        return "La contraseña no puede tener más de 16 caracteres";
    }

    this.users.push(user);

    return "Usuario registrado:\n" + JSON.stringify(user);
  }
}
