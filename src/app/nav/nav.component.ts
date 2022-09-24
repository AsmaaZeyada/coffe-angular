import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  open = false;
  addNavClass = false;

  constructor() { }

  ngOnInit() {
    this.navToggle();
  }

  toggleClass() {
    this.open = !this.open;
    if (this.open) {
      document.body.className += 'bodyOpen';
    } else {
      document.body.className = '';
    }
  }

  navToggle() {
    window.addEventListener('scroll', () => {
      if (scrollY.valueOf() > 50) {
        this.addNavClass = true;
      } else {
        this.addNavClass = false;
      }
    });
  }

}
