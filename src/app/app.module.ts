import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { storeFreeze } from 'ngrx-store-freeze';
import { localStorageSync } from 'ngrx-store-localstorage';

import { CustomSerializer } from './store/router/router.reducers';
import { appEffects, appReducer, appSelectors } from './store';
import { ActionReducer } from '@ngrx/store';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
// import { HomeModule } from './home/home.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CategoriesComponent } from './home/components/categories/categories.component';

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({ keys: ['login'], rehydrate: true })(reducer);
}

const metaReducers = [localStorageSyncReducer, storeFreeze];

@NgModule({
  declarations: [AppComponent, CategoriesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    StoreModule.forRoot(appReducer, { metaReducers }),
    EffectsModule.forRoot(appEffects),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
    }),
  ],
  providers: [
    appSelectors,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
