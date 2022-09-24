import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../../../assets/Models/review.Model';
import { ReviewService } from '../../Services/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() reviewTitle: string;
  @Input() reviewText: string;
  @Input() reviewLogo: string;
  @Input() reviewRating: number;


  constructor() { }

  ngOnInit() {
  }

}
