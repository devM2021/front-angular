import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/services/CommonService';
import { CommentInput } from 'src/app/type';

@Injectable({
  providedIn: 'root',
})
export class CommentService extends CommonService {
  constructor(private http: HttpClient) {
    super();
  }

  addComment = (data: CommentInput): Observable<Comment> => {
    return this.http.post<Comment>(
      `${this.baseUrl}/comments/save-comment`,
      data,
      this.httpOptions
    );
  };

  fetcOneCommentByVehicle = (id: string | undefined): Observable<Comment[]> => {
    console.log('********************** ', id);
    return this.http.get<Comment[]>(
      `${this.baseUrl}/comments/list-by-vehicleId/${id}`,
      this.httpOptions
    );
  };
}
