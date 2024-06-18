import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from '@register/register.component';
import { WelcomePageComponent } from '@welcome/welcome-page.component'
import { LoginComponent } from '@login/login.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    RegisterComponent,
    WelcomePageComponent,
    LoginComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

  constructor () {}

  currentTab: string = 'login';

  selectTab(tab: string) {
    this.currentTab = tab;
  }

}
