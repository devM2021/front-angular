import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/services/CommonService';
import { User } from 'src/app/type';

@Injectable({
  providedIn: 'root',
})
export class RegisterService extends CommonService {
  constructor(private http: HttpClient) {
    super();
  }

  registerUser = (data: User): Observable<User> => {
    return this.http.post<User>(
      `${this.baseUrl}/users/save-user`,
      data,
      this.httpOptions
    );
  };
}
