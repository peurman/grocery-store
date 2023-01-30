import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
// import { By } from '@angular/platform-browser';
import { LoginComponent } from './login.component';
import { loginAction } from '../../store/login/login.actions';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: MockStore;
  const initialState = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [LoginComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  afterEach(() => {
    localStorage.clear();
  });

  describe('component creation', () => {
    it('should create the login component', () => {
      expect(component).toBeTruthy();
    });
  });
  describe('form elements', () => {
    // Inputs
    it('should have 2 inputs in the form', () => {
      const inputs =
        fixture.debugElement.nativeElement.querySelectorAll('input');
      expect(inputs.length).toBe(2);
    });

    it('should show email error message when email is empty', waitForAsync(() => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const emailElement: HTMLInputElement =
          fixture.debugElement.nativeElement.querySelector(
            'input[name="email"]'
          );
        emailElement.value = '';
        emailElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          const emailErrors: HTMLDivElement =
            fixture.debugElement.nativeElement.querySelector('#emailErrors');
          expect(emailErrors.children.length).toEqual(1);
          expect(emailErrors.children[0].innerHTML).toEqual(
            ' Email is required '
          );
        });
      });
    }));

    it('should show email error message when email pattern is wrong', waitForAsync(() => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const emailElement: HTMLInputElement =
          fixture.debugElement.nativeElement.querySelector(
            'input[name="email"]'
          );
        emailElement.value = 'invalidEmail';
        emailElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          const emailErrors: HTMLDivElement =
            fixture.debugElement.nativeElement.querySelector('#emailErrors');
          expect(emailErrors.children.length).toEqual(1);
          expect(emailErrors.children[0].innerHTML).toEqual(
            ' You must enter an email format '
          );
        });
      });
    }));
    it('should show password error message when password is empty', waitForAsync(() => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const passwordInput = fixture.debugElement.nativeElement.querySelector(
          'input[name="password"]'
        );
        passwordInput.value = '';
        passwordInput.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          const passwordErrors: HTMLDivElement =
            fixture.debugElement.nativeElement.querySelector('#passwordErrors');
          expect(passwordErrors.children.length).toEqual(1);
          expect(passwordErrors.children[0].innerHTML).toEqual(
            ' Password is required '
          );
        });
      });
    }));
    // Submit BUTTON
    it('should disable submit button when email is invalid', waitForAsync(() => {
      const emailInput = fixture.debugElement.nativeElement.querySelector(
        'input[name="email"]'
      );
      const submitButton = fixture.debugElement.nativeElement.querySelector(
        'button[type="submit"]'
      );
      fixture.whenStable().then(() => {
        emailInput.value = 'someInvalidEmail';
        emailInput.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(submitButton.disabled).toBeTruthy();
        });
      });
    }));
    it('should enable submit button when form is valid', waitForAsync(() => {
      // const email = component.loginForm.controls['password'];
      // console.log('EMAIL: ', email);
      const emailInput = fixture.debugElement.nativeElement.querySelector(
        'input[name="email"]'
      );
      const passwordInput = fixture.debugElement.nativeElement.querySelector(
        'input[name="password"]'
      );
      const submitButton = fixture.debugElement.nativeElement.querySelector(
        'button[type="submit"]'
      );
      // ! No change if is set in true
      // submitButton.disabled = true;
      // console.log('BUTTON DISABLED initial: ', submitButton.disabled);

      fixture.whenStable().then(() => {
        emailInput.value = 'test@test.com';
        passwordInput.value = 'myPassword';
        emailInput.dispatchEvent(new Event('input'));
        passwordInput.dispatchEvent(new Event('input'));
        console.log(
          'EMAIL: ',
          emailInput.value,
          ' - PASS: ',
          passwordInput.value
        );
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          // console.log('BUTTON DISABLED final: ', submitButton.disabled);
          expect(submitButton.disabled).toBe(false);
        });
      });
    }));
  });
  // handleSubmit and dispatch
  describe('dispatching form', () => {
    it('should dispatch loginAction when form is valid', () => {
      spyOn(store, 'dispatch');
      component.handleSubmit(
        { email: 'test@test.com', password: 'password' },
        true
      );
      expect(store.dispatch).toHaveBeenCalledWith(
        loginAction({
          data: { data: { email: 'test@test.com', password: 'password' } },
        })
      );
    });

    it('should not dispatch loginAction when form is invalid', () => {
      spyOn(store, 'dispatch');
      component.handleSubmit(
        { email: 'trainee4@example.com', password: '' },
        false
      );
      expect(store.dispatch).not.toHaveBeenCalled();
    });
  });
});
