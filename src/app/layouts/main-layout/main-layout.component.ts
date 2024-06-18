import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from '@register/register.component';
import { WelcomePageComponent } from '@welcome/welcome-page.component'

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterModule,
    RegisterComponent,
    WelcomePageComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
