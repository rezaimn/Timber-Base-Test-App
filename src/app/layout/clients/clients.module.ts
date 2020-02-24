import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import {ClientsRoutingModule} from './clients-routing.module';
import {SharedModule} from '../../shared/modules/shared.module';



@NgModule({
  declarations: [
    ClientsComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule
  ]
})
export class ClientsModule { }
