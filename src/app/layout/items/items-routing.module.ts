import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemsComponent} from './items.component';
import {AuthGuard} from '../../shared/guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: ItemsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule {
}
