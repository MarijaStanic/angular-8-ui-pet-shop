import {
  Component,
  OnInit,
  PipeTransform,
  EventEmitter,
  Output
} from "@angular/core";
import { CustomersService } from "../customers.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap"; // import the NgbModal service
import { DecimalPipe } from "@angular/common";
import { FormControl } from "@angular/forms";

import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

import { Customer } from "../customer.model";
import { CustomerFormComponent } from "../customer-form/customer-form.component";

@Component({
  selector: "customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.css"],
  providers: [DecimalPipe]
})
export class CustomersComponent implements OnInit {
  @Output() onSelectCustomer = new EventEmitter<Customer>();
  customers: Customer[];
  customers$: Observable<Customer[]>;
  filter = new FormControl("");

  // add property to inject NgbModal service
  constructor(
    private customersService: CustomersService,
    private modalService: NgbModal,
    private pipe: DecimalPipe
  ) {}

  ngOnInit() {
    this.loadAllCustomers();
  }

  open(customer) {
    const modal = this.modalService.open(CustomerFormComponent);
    if (this.isNewCustomer(customer))
      modal.componentInstance.customer = Object.assign({}, customer);
    else modal.componentInstance.customer = new Customer();
    modal.result.then(() => {
      this.loadAllCustomers();
    });
  }

  private isNewCustomer(customer) {
    return customer !== undefined;
  }

  loadAllCustomers() {
    this.customersService.findAll<Array<Customer>>().subscribe(customers => {
      this.customers = customers;
      this.customers$ = this.filter.valueChanges.pipe(
        startWith(""),
        map(text => this.search(text, this.pipe))
      );
    });
  }

  search(text: string, pipe: PipeTransform): Customer[] {
    return this.customers.filter(customer => {
      const term = text.toLowerCase();
      return (
        customer.firstName.toLowerCase().includes(term) ||
        customer.lastName.toLowerCase().includes(term) ||
        pipe.transform(customer.homePhone).includes(term) ||
        pipe.transform(customer.mobilePhone).includes(term)
      );
    });
  }

  selectCustomer(customer) {
    this.onSelectCustomer.emit(customer);
  }
}
