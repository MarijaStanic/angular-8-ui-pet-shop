import { Stock } from '../stocks/stock.model';

export class OrderProduct {
  stock: Stock;
  quantity: number;

  constructor(stock: Stock, quantity: number) {
    this.stock = stock;
    this.quantity = quantity;
  }

}
