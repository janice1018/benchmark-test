import { ApplicationConfig } from '@angular/core';
import { RouterModule, provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeng/themes/lara';
import { ProductCardComponent } from './product-card/product-card.component';

const routes: Routes = [
  { path: '', component: ProductCardComponent },
  
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: Lara,
      },
    }),
  ],
};