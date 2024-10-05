import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from '../models/repository';

@Injectable()
export class GithubService {
  baseURL: string = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  getRepos(username: string): Observable<Repository[]> {
    return this.http.get<Repository[]>(
      `${this.baseURL}/users/${username}/repos`
    );
  }
}
