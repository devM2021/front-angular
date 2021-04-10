import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { CommentService } from 'src/app/comment/comment/comment.service';
import { CommentInput, Vehicle } from 'src/app/type';
import { VehicleService } from '../../vehicle/vehicle.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private vehicleService: VehicleService,
    private tokenStorageService: TokenStorageService,
    private commentService: CommentService
  ) {}

  form: any = {};
  vehicle: Vehicle | undefined;
  comment!: CommentInput;
  vehicleId!: string;
  username: string | null | undefined;
  errorMessage!: string;
  isAuthenticated: boolean = false;
  ngOnInit() {
    const { id } = this.route.snapshot.params;
    this.vehicleId = id;
    this.username = this.tokenStorageService.getUsername();
    this.vehicleService.fetcOneVehicle(id).subscribe(
      (v) => {
        this.vehicle = v;
        console.log(this.vehicle);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit = () => {
    this.comment = {
      username: this.username as any,
      content: this.form.content,
      vehicleId: this.vehicleId,
    };

    this.commentService.addComment(this.comment).subscribe(
      (data) => {
        console.log(data);
        window.location.reload();
      },
      (error) => {
        console.log(error);
        this.errorMessage = error.error.message;
      }
    );
  };
}
