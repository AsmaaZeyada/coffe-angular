import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  @Input() count: number;
  @Input() title: string;

  numberShown = 0;
  showCountClass = false;

  constructor() { }

  ngOnInit() {
    this.countToggle();
    this.numberShown = Math.ceil(this.count / 2);
  }

  countToggle() {
    window.addEventListener('scroll', () => {
      if (scrollY.valueOf() > (document.getElementById('reviws').offsetTop - 200)) {
        this.showCountClass = true;
        setInterval(() => {
          if (this.numberShown !== this.count) {
            this.numberShown++;
          }
        }, 0.5);
      }
    });
  }


}
