import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { jwtInterceptor } from './jwt.interrceptor';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { CounterReducer } from '../state/counter.reducer';
import { ReviewReducer } from '../state/reviews/review.reducer';
import { ReviewEffect } from '../state/reviews/review.effect';
import { provideStoreDevtools } from '@ngrx/store-devtools';
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withInterceptors([jwtInterceptor])), 
   provideClientHydration(), 
   provideStore({mycounter:CounterReducer,reviews:ReviewReducer}),
    provideEffects(ReviewEffect),
    provideStoreDevtools({maxAge:25,logOnly:!isDevMode,autoPause:true})]
    
};

             
