import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './home/components/categories/categories.component';
import { RouterModule } from '@angular/router';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';
import { logoutAction } from './store/login/login.actions';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let mockStore: MockStore;
  const initialState = {};

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, CategoriesComponent],
      imports: [RouterModule, RouterTestingModule],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
    mockStore = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  describe('component creation', () => {
    it('should create the app component', () => {
      expect(component).toBeTruthy();
    });
  });
  describe('navbar option', () => {
    // logout navbar option
    it('should have the logout option when the user is logged in', () => {
      component.token = 'someValidToken';
      fixture.detectChanges();
      const logoutOption = fixture.debugElement.query(
        By.css('#logout-navbar-option')
      );
      expect(logoutOption.nativeElement).toBeTruthy();
    });
    it('should not have the logout option when the user is not logged in', () => {
      component.token = '';
      fixture.detectChanges();
      const logoutOption = fixture.debugElement.query(
        By.css('#logout-navbar-option')
      );
      expect(logoutOption).toBeFalsy();
    });
  });
  describe('when clicking "logout" navbar option...', () => {
    // dispatch logout action
    it('should dispatch logout action when logout method is called', () => {
      spyOn(mockStore, 'dispatch');
      component.logout();
      expect(mockStore.dispatch).toHaveBeenCalledWith(logoutAction());
    });
    // remove the token when logout
    it('should remove the token when logout method is called', () => {
      spyOn(localStorage, 'removeItem');
      component.logout();
      expect(localStorage.removeItem).toHaveBeenCalledWith('user.token');
    });
  });
});
