import { Routes } from '@angular/router';
import { MainLayoutComponent } from '@mainlayout/main-layout.component'

export const routes: Routes = [
    { path: '', component: MainLayoutComponent },
    { path: 'not-found', loadComponent: ()=> import('@not-found/not-found.component').then(res=>res.NotFoundComponent) }
];
