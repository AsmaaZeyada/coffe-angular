import { Injectable } from '@angular/core';
import { Card } from '../../assets/Models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cardList: Card[] = [];
  constructor() {
    this.cardList = [
      new Card(
        'Cappuccino',
        'Usage of the Internet is becoming more common due to rapid advance.',
        49),
      new Card(
        'Americano',
        'Usage of the Internet is becoming more common due to rapid advance.',
        52),
      new Card(
        'Espresso',
        'Usage of the Internet is becoming more common due to rapid advance.',
        90),
      new Card(
        'Macchiato',
        'Usage of the Internet is becoming more common due to rapid advance.',
        49),
      new Card(
        'Mocha',
        'Usage of the Internet is becoming more common due to rapid advance.',
        49),
      new Card(
        'Coffee Latte',
        'Usage of the Internet is becoming more common due to rapid advance.',
        38),
        new Card(
          'Piccolo Latte',
          'Usage of the Internet is becoming more common due to rapid advance.',
          40),
        new Card(
          'Ristretto',
          'Usage of the Internet is becoming more common due to rapid advance.',
          42),
        new Card(
          'Affogato',
          'Usage of the Internet is becoming more common due to rapid advance.',
          39),
    ];
  }

  getCardList() {
    return this.cardList;
  }
}
