import { Component, Input } from '@angular/core';
import { Customer } from '../customer.model';

@Component({
  selector: '[customer-row]',
  templateUrl: './customer-row.component.html',
  styleUrls: ['./customer-row.component.css']
})
export class CustomerRowComponent {
  @Input() customer: Customer;
  @Input() filterValue: String;

}
