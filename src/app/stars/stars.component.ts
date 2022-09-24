import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input() numberOfStars: number;
  stars = [];
  constructor() { }

  ngOnInit() {
    this.stars = [
      'fas fa-star',
      'fas fa-star',
      'fas fa-star',
      'fas fa-star',
      'fas fa-star',
    ];
  }

}
