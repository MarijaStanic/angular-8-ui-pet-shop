import { Component, OnInit, ViewChild} from "@angular/core";
import { NgForm, NgControl } from "@angular/forms";
import { StocksService } from "src/app/stocks/stocks.service";
import { OrdersService } from "../orders.service";
import { Stock } from "src/app/stocks/stock.model";
import { Customer } from "src/app/customers/customer.model";
import { Order } from "../order.model";
import { OrderProduct } from "../order-product.model";
import { NavtabsComponent } from 'src/app/common/navtabs/navtabs.component';

@Component({
  selector: "create-order",
  templateUrl: "./create-order.component.html",
  styleUrls: ["./create-order.component.css"]
})
export class CreateOrderComponent implements OnInit {
  //@ViewChild('form', {static: false}) form;
  @ViewChild("navtabs", { static: true }) navtabs: NavtabsComponent;

  stocks: Stock[];
  orderedQuantity = {};
  order: Order = new Order();
  errorMessage: String;

  constructor(
    private stocksService: StocksService,
    private ordersService: OrdersService
  ) {}

  ngOnInit() {
    this.loadAllStocks();
  }

  loadAllStocks() {
    this.stocksService.findAll<Stock[]>().subscribe(stocks => {
      console.log(stocks);
      this.stocks = stocks;
    });
  }

  addToOrder(stock: Stock, index: number, formControl: NgControl) {
    console.log("fc", formControl);
    let orderedQuantity = this.orderedQuantity[index];
    if (this.isValidOrderedQuantityInput(orderedQuantity, stock.quantity)) {
      this.errorMessage =
        "Must be greater than 0 and smaller than " + (stock.quantity + 1);
      formControl.control.setErrors({ invalid: true });
    } else {
      let op: OrderProduct = this.order.orderProducts.find(
        op => op.stock === stock
      );
      if (op) {
        op.quantity += orderedQuantity;
      } else {
        this.order.orderProducts.push(new OrderProduct(stock, orderedQuantity));
      }
      stock.quantity -= orderedQuantity;
      this.order.totalPrice += stock.product.price * orderedQuantity;
      this.order.quantity += orderedQuantity;
      //   formControl.control.disable();
    }
  }

  private isValidOrderedQuantityInput(
    orderedQuantity: number,
    availableQuantity: number
  ) {
    return (
      orderedQuantity > availableQuantity ||
      orderedQuantity <= 0 ||
      orderedQuantity === undefined
    );
  }

  reset() {
    this.orderedQuantity = {};
    this.order.totalPrice = 0;
    this.order.orderProducts = [];
    this.loadAllStocks();
    this.navtabs.setCurrentStep(0);
  }

  submit() {
    console.log(this.order);
    this.ordersService.create<Order>(this.order).subscribe(response => {
      console.log(response);
    });
  }

  setSelectedCustomer(customer: Customer) {
    this.order.customer = customer;
  }
}
