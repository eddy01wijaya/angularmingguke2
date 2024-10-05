import { Injectable } from '@angular/core';
import { ISignin } from '../interfaces/i-signin';
import { Observable } from 'rxjs';
import { IToken } from '../interfaces/i-token';
import { HttpClient } from '@angular/common/http';
import { BaseHttpService } from './base-http.service';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

@Injectable()
export class AuthenticationService {
  private _token: string = '';
  private _bearer: string = 'Bearer';
  private _isLoggedIn: boolean = false;

  constructor(
    private http: HttpClient,
    private baseHttpService: BaseHttpService
  ) {}

  signIn(signin: ISignin): Observable<IToken> {
    const headers = {
      'Content-Type': 'application/json',
    };

    const body = JSON.stringify(signin);
    return this.http.post<IToken>(`/api/token/`, body, { headers });
  }

  get token(): string {
    return `${this._bearer} ${this._token}`;
  }

  set token(value: string) {
    this._token = value;
  }

  sessionStart() {
    this._isLoggedIn = true;
  }

  isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  signOut() {
    this._isLoggedIn = false;
  }

  get baseHttp(): BaseHttpService {
    return this.baseHttpService;
  }
}
