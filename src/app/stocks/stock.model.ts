import { Product } from '../products/product.model';
import { SalesUnit } from '../salesunits/salesUnit.model';

export class Stock {
    id: number;
    product: Product;
    salesUnit: SalesUnit;
    quantity: number;
}