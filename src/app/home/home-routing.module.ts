import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ViewUserComponent} from './users/view-user/view-user.component';
import {ListRepereComponent} from './repere/list-repere/list-repere.component';
import {EditRepereComponent} from './repere/edit-repere/edit-repere.component';
import {DeleteRepereComponent} from './repere/delete-repere/delete-repere.component';
import {AddRepereComponent} from './repere/add-repere/add-repere.component';
import {ListPompeComponent} from './pompe/list-pompe/list-pompe.component';
import {AddPompeComponent} from './pompe/add-pompe/add-pompe.component';

const routes: Routes = [
  {
    path: 'users-view',
    component: ViewUserComponent,
  }
  ,
  {
    path: 'repere-list',
    component: ListRepereComponent,
  }
  ,
  {
    path: 'repere-edit',
    component: EditRepereComponent,
  }
  ,
  {
    path: 'repere-delete',
    component: DeleteRepereComponent,
  }
  ,
  {
    path: 'repere-add',
    component: AddRepereComponent,
  },
  {
    path: 'pompe-list',
    component: ListPompeComponent,
  }
  ,
  {
    path: 'pompe-add',
    component: AddPompeComponent,
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
