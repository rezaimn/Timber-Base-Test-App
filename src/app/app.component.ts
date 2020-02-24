import { Component } from '@angular/core';
import {HttpService} from './shared/services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 constructor(private  httpService:HttpService){
   this.httpService.get('./assets/stored-data-files/invoices-list.json').subscribe(
     res => {
       console.log("111111111111111111111111111111111111111111111111111111111111111111")
       // this.invoiceList = res;
       // this.invoiceListT = res;
     }
   );
 }
}
