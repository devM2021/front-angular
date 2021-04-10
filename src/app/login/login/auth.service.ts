import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/services/CommonService';
import { LoginInput, UserInfo } from 'src/app/type';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends CommonService {
  constructor(private http: HttpClient) {
    super();
  }

  login = (credentials: LoginInput): Observable<UserInfo> => {
    return this.http.post<UserInfo>(
      `${this.baseUrl}/authenticate`,
      credentials,
      this.httpOptions
    );
  };
}
