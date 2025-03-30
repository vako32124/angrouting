import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch:'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about-us', component: AboutusComponent }, 
    { path: 'contact', component: ContactComponent },
    { path: '**', component: ErrorComponent },
];