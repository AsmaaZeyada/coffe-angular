import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-servecard',
  templateUrl: './servecard.component.html',
  styleUrls: ['./servecard.component.css']
})
export class ServecardComponent implements OnInit {
  today = new Date();
  @Input() img: string;
  constructor() { }

  ngOnInit() {
  }

}
