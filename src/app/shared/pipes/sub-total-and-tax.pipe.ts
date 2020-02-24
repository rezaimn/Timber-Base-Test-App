import {Pipe, PipeTransform} from '@angular/core';
import {ItemsModel} from '../../layout/items/items.model';

@Pipe({name: 'subTotalAndTax', pure: false})

/**
 * filters sections that contains data
 */
export class SubTotalAndTaxPipe implements PipeTransform {
  transform(itemsList: ItemsModel[], request) {
    if (request === 'subTotal') {
      let subTotal = 0;
      for (const item of itemsList) {
        subTotal += item.amount;
      }
      return subTotal;
    }
    if (request === 'tax') {
      let tax = 0;
      for (const item of itemsList) {
        tax += (item.amount * 20) / 100;
      }
      return tax;
    }
  }
}
