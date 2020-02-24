import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../shared/services/http.service';
import {ItemsModel} from './items.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  itemsList: ItemsModel[] = [];

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.httpService.get('./assets/stored-data-files/items-list.json').subscribe(
      res => {
        this.itemsList = res;
      }
    );
  }

}
