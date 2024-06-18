import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'login',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    NotFoundComponent
  ],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {

  
  @Output() tab = new EventEmitter<string>();
  
  constructor () {}

  selectTab(tab: string){
    this.tab.emit(tab)
  }
}
