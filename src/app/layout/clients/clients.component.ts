import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../shared/services/http.service';
import {ClientsModel} from './clients.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clientsList:ClientsModel[]=[];
  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.httpService.get('./assets/stored-data-files/clients-list.json').subscribe(
      res => {
        this.clientsList=res;
      }
    );
  }

}
