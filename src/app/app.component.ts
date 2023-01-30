import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { logoutAction } from './store/login/login.actions';

import * as fromLogin from './store/login/login.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'week10';
  token = '';
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.pipe(select(fromLogin.selectLoginData)).subscribe(res => {
      if (res) this.token = res.data.token;
    });
  }

  logout() {
    localStorage.removeItem('user.token');
    this.store.dispatch(logoutAction());
  }
}
