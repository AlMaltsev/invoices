import { Component, OnInit } from '@angular/core';

import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CustomersService } from '../../core/services/customers.service';
import { InvoicesService } from '../../core/services/invoices.service';

@Component({
  selector: 'app-invoices-all',
  templateUrl: './invoices-all.component.html',
  styleUrls: ['./invoices-all.component.scss']
})
export class InvoicesAllComponent implements OnInit {

  invoices$: Observable<any>;

  displayedColumns: string[] = ['number', 'customerId', 'customerName', 'discount', 'total', 'actions'];

  constructor(private invoicesService: InvoicesService, private customersService: CustomersService) { }

  ngOnInit() {
    this.invoices$ = combineLatest(
      this.invoicesService.invoices$,
      this.customersService.customers$,
    ).pipe(
      map( ([invoices, customers]) => invoices.map(invoice => ({
        ...invoice,
        customer: customers.find(customer => invoice.customer_id === customer._id)
      }))
    ));
  }

}


