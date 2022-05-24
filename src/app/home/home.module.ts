import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';

import {LayoutModule} from '@angular/cdk/layout';


import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {
  MatDialogModule,
  MatInputModule, MatProgressSpinnerModule,
  MatSortModule,
} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AddHeaderInterceptor} from './AddHeaderInterceptor';
import {ViewUserComponent} from './users/view-user/view-user.component';
import {AddRepereComponent} from './repere/add-repere/add-repere.component';
import {ListRepereComponent} from './repere/list-repere/list-repere.component';
import {DeleteRepereComponent} from './repere/delete-repere/delete-repere.component';
import {EditRepereComponent} from './repere/edit-repere/edit-repere.component';
import {AddPompeComponent} from './pompe/add-pompe/add-pompe.component';
import {ListPompeComponent} from './pompe/list-pompe/list-pompe.component';
import {PdfPompeComponent} from './pompe/pdf-pompe/pdf-pompe.component';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    MatDialogModule
  ],
  declarations: [ViewUserComponent, AddRepereComponent, ListRepereComponent, DeleteRepereComponent, EditRepereComponent, AddPompeComponent,
    ListPompeComponent, PdfPompeComponent],
  entryComponents: [PdfPompeComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AddHeaderInterceptor,
    multi: true,
  }],
})
export class HomeModule {
}
