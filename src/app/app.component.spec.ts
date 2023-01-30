import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  flush,
  waitForAsync,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './home/components/categories/categories.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { logoutAction } from './store/login/login.actions';

describe('AppComponent', () => {
  let activatedRoute: ActivatedRoute;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let mockStore: MockStore;
  const initialState = {};

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, CategoriesComponent],
      imports: [RouterModule, RouterTestingModule, StoreModule.forRoot({})],
      providers: [
        provideMockStore({ initialState }),
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => 'test' } } },
        },
      ],
    }).compileComponents();
    mockStore = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture = TestBed.createComponent(AppComponent);
    // storage = TestBed.inject(StorageBrowser);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
  });
  describe('component creation', () => {
    it('should create the app component', () => {
      expect(component).toBeTruthy();
    });
  });
  describe('navbar option', () => {
    // logout navbar option
    it('should have the logout option when the user is logged in', fakeAsync(() => {
      component.token = 'validToken';
      fixture.detectChanges();
      const logoutOption = de.nativeElement.querySelector(
        '#logout-navbar-option'
      );
      flush();
      expect(logoutOption).toBeTruthy();
    }));
    it('should not have the logout option when the user is not logged in', fakeAsync(() => {
      component.token = '';
      fixture.detectChanges();
      const logoutOption = de.nativeElement.querySelector(
        '#logout-navbar-option'
      );
      expect(logoutOption).toBeFalsy();
    }));
  });
  describe('when clicking logout...', () => {
    // dispatch logout action
    it('should dispatch logout action when logout method is called', () => {
      spyOn(mockStore, 'dispatch');
      component.logout();
      expect(mockStore.dispatch).toHaveBeenCalledWith(logoutAction());
    });
    // remove the token when logout
    // it('should remove the token when logout method is called', () => {
    //   spyOn(storage, 'removeItem');
    //   component.logout();
    //   expect(storage.removeItem).toHaveBeenCalledWith('user.token');
    // });
  });
});
