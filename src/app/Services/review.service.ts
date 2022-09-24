import { Injectable } from '@angular/core';
import { Review } from '../../assets/Models/review.Model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  reviews: Review[] = [];

  constructor() {
    this.reviews = [
      new Review(
        'assets/images/r1.png',
        'lorem ipusm',
        3,
        'Accessories Here you can find the best computer accessory for your laptop,\
        monitor, printer, scanner, speaker. Here you can find the best computer accessory\
        for your laptop, monitor, printer, scanner, speaker.'),
      new Review(
        'assets/images/r2.png',
        'lorem ipusm',
        2,
        'Accessories Here you can find the best computer accessory for your laptop,\
        monitor, printer, scanner, speaker. Here you can find the best computer accessory\
          for your laptop, monitor, printer, scanner, speaker.')
    ];
  }

  getReviews() {
    return this.reviews;
  }
}
