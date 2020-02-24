import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InvoicesComponent} from './invoices.component';
import {AuthGuard} from '../../shared/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: InvoicesComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule {
}
