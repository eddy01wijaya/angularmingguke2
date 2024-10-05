import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { AuthenticationService } from './authentication.service';
import { IPagination } from '../interfaces/i-pagination';
import { IPic } from '../interfaces/i-pic';
import { Observable } from 'rxjs';

@Injectable()
export class PicService {
  constructor(
    private http: HttpClient,
    private baseHttpService: BaseHttpService,
    private authService: AuthenticationService
  ) {}

  get baseHttp() {
    return this.baseHttpService;
  }

  getPics(): Observable<IPagination<IPic>> {
    const headers = {
      Authorization: this.authService.token,
    };
    return this.http.get<IPagination<IPic>>('/api/pictures/', { headers });
  }

  getPic(id: number): Observable<IPic> {
    const headers = {
      Authorization: this.authService.token,
    };

    return this.http.get<IPic>(`/api/pictures/${id}/`, { headers });
  }

  updatePic(id: number, file: any): Observable<IPic> {
    const headers = {
      Authorization: this.authService.token,
    };

    const formData: FormData = new FormData();
    formData.append('src', file);
    return this.http.put<IPic>(`/api/pictures/${id}/`, formData, {
      headers,
    });
  }

  removePic(id: number): Observable<null> {
    const headers = {
      Authorization: this.authService.token,
    };

    return this.http.delete<null>(`/api/pictures/${id}/`, {
      headers,
    });
  }

  upload(file: any): Observable<IPic> {
    const headers = {
      Authorization: this.authService.token,
    };

    const formData: FormData = new FormData();
    formData.append('src', file);
    return this.http.post<IPic>(`/api/pictures/`, formData, {
      headers,
    });
  }
}
