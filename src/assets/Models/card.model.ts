export class Card {
  title: string;
  price: number;
  text: string;

  constructor( title: string, text: string, price: number) {
    this.title = title;
    this.text = text;
    this.price = price;
  }

}
