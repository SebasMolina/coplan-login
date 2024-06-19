import { Routes } from '@angular/router';
import { MainLayoutComponent } from '@mainlayout/main-layout.component'

export const routes: Routes = [
    { path: '', component: MainLayoutComponent },
    { path: 'not-found', loadComponent: ()=> import('@not-found/not-found.component').then(res=>res.NotFoundComponent) },
    { path: 'forgot-password', loadComponent: ()=> import('@forgot-password/forgot-password.component').then(res=>res.ForgotPasswordComponent) }
];
