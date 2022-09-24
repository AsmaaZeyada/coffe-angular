export class Review {
  logo: string;
  title: string;
  rating: number;
  text: string;

  constructor(logo: string, title: string, rating: number, text: string) {
    this.logo = logo;
    this.title = title;
    this.rating = rating;
    this.text = text;
  }
}
