import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/services/CommonService';
import { Vehicle } from 'src/app/type';

@Injectable({
  providedIn: 'root',
})
export class VehicleService extends CommonService {
  constructor(private http: HttpClient) {
    super();
  }

  fetcAllVehicle = (): Observable<Vehicle[]> => {
    return this.http.get<Vehicle[]>(
      `${this.baseUrl}/vehicles/list`,
      this.httpOptions
    );
  };

  fetcOneVehicle = (id: string): Observable<Vehicle> => {
    return this.http.get<Vehicle>(
      `${this.baseUrl}/vehicles/${id}`,
      this.httpOptions
    );
  };
}
