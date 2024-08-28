import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        component: HomeComponent
    },
    {
        path: 'about',
        title: 'About us',
        component: AboutComponent
    },
    {
        path: 'contact-us',
        title: 'Contact us',
        component: ContactComponent
    }
];
