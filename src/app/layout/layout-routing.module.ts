import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout.component';
import {AuthGuard} from '../shared/guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'invoices', pathMatch: 'prefix'},
      {path: 'invoices', loadChildren: () => import('./invoices/invoices.module').then(m => m.InvoicesModule)},
      {path: 'clients', loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule)},
      {path: 'items', loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
