import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/type';
import { VehicleService } from './vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
})
export class VehicleComponent implements OnInit {
  vehicles: Vehicle[] | undefined;

  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {
    this.readVehicles();
  }

  readVehicles(): void {
    this.vehicleService.fetcAllVehicle().subscribe(
      (v) => {
        this.vehicles = v;
        console.log(this.vehicles);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
