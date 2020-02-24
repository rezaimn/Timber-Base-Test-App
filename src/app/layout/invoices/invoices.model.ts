import {ItemsModel} from '../items/items.model';
import {ClientsModel} from '../clients/clients.model';

export class InvoicesModel {
  id: number;
  number: string;
  date: string;
  items: ItemsModel[];
  client: ClientsModel;
  total: number;
  tax: number;

  constructor(data: any = {}) {
    this.id = data.id || 0;
    this.number = data.number || '000000';
    this.date = data.date || new Date();
    this.items = data.items || [];
    this.client = data.client || new ClientsModel({});
    this.total = data.total || 0;
    this.tax = data.tax || 0;
  }
}
