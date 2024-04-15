export default class Pizza {
  id: number;
  name: string;
  price: number;
  description: string;
  picture: string;

  constructor(
    id: number,
    name: string,
    price: number,
    description: string,
    picture: string
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.picture = picture;
  }
}
