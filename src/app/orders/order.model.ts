import { Customer } from "../customers/customer.model";
import { OrderProduct } from "./order-product.model";

export class Order {
  id: number;
  orderProducts: OrderProduct[] = [];
  customer: Customer;
  orderCreated: Date = new Date();
  totalPrice: number = 0;
  quantity: number = 0;
}
