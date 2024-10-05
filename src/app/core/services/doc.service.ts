import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { Observable } from 'rxjs';
import { IDoc } from '../interfaces/i-doc';
import { AuthenticationService } from './authentication.service';
import { IPagination } from '../interfaces/i-pagination';

@Injectable()
export class DocService {
  constructor(
    private http: HttpClient,
    private baseHttpService: BaseHttpService,
    private authService: AuthenticationService
  ) {}

  get baseHttp() {
    return this.baseHttpService;
  }

  getDocs(): Observable<IPagination<IDoc>> {
    const headers = {
      Authorization: this.authService.token,
    };
    return this.http.get<IPagination<IDoc>>('/api/docs/', { headers });
  }

  getDoc(id: number): Observable<IDoc> {
    const headers = {
      Authorization: this.authService.token,
    };

    return this.http.get<IDoc>(`/api/docs/${id}/`, { headers });
  }

  updateDoc(id: number, file: any): Observable<IDoc> {
    const headers = {
      Authorization: this.authService.token,
    };

    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.put<IDoc>(`/api/docs/${id}/`, formData, {
      headers,
    });
  }

  removeDoc(id: number): Observable<null> {
    const headers = {
      Authorization: this.authService.token,
    };

    return this.http.delete<null>(`/api/docs/${id}/`, {
      headers,
    });
  }

  upload(file: any): Observable<IDoc> {
    const headers = {
      Authorization: this.authService.token,
    };

    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post<IDoc>(`/api/docs/`, formData, {
      headers,
    });
  }
}
