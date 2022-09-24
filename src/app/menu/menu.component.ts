import { Component, OnInit } from '@angular/core';
import { Card } from '../../assets/Models/card.model';
import { CardService } from '../Services/card.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  cardList: Card[] = [];
  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.cardList = this.cardService.getCardList();
  }

}
