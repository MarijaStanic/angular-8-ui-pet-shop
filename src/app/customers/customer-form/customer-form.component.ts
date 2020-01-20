import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomersService } from '../customers.service';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent {
  @Input() customer: Customer;

  constructor(
    public activeModal: NgbActiveModal,
    private customerService: CustomersService ) { }

  save() {
    if (this.customer.id) {
      this.customerService.update<Customer>(this.customer.id, this.customer).subscribe(response => {
        this.activeModal.close();
      });
    } else {
      this.customerService.create<Customer>(this.customer).subscribe(response => {
        this.activeModal.close();
      });
    }
  }

  delete(id: number) {
    this.customerService.delete<Customer>(id).subscribe(response => {
      this.activeModal.close();
    });
  }

  
}
