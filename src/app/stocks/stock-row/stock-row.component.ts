import { Component, Input } from '@angular/core';
import { Stock } from '../stock.model';

@Component({
  selector: '[stock-row]',
  templateUrl: './stock-row.component.html',
  styleUrls: ['./stock-row.component.css']
})
export class StockRowComponent {
  @Input() stock: Stock;
  @Input() filterValue: String;

}
