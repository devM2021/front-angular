import { HttpHeaders } from '@angular/common/http';

export class CommonService {
  protected baseUrl: string = 'http://localhost:2021';

  protected httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
}
