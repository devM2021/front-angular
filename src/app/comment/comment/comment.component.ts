import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/type';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnChanges {
  constructor(
    private commentService: CommentService,
    private route: ActivatedRoute
  ) {}

  ngOnChanges(changes: SimpleChanges): void {}

  vehicleId: string | undefined;

  comments: any;

  ngOnInit() {
    const { id } = this.route.snapshot.params;
    this.vehicleId = id;

    this.commentService.fetcOneCommentByVehicle(this.vehicleId).subscribe(
      (v) => {
        this.comments = v;
        console.log(this.comments);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
