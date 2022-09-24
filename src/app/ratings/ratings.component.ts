import { Component, OnInit } from '@angular/core';
import { Review } from '../../assets/Models/review.Model';
import { ReviewService } from '../Services/review.service';
import { StatsService } from '../Services/stats.service';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {
  reviews: Review[] = [];
  stats = {};
  constructor(
    private reviewsService: ReviewService,
    private statsService: StatsService) { }

  ngOnInit() {
    this.reviews = this.reviewsService.getReviews();
    this.stats = this.statsService.getStats();
  }
}
