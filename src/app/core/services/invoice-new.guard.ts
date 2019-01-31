import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { InvoiceNewComponent } from '../../invoices/invoice-new/invoice-new.component';


@Injectable({
  providedIn: 'root'
})
export class InvoiceNewGuard implements CanDeactivate<InvoiceNewComponent> {
  canDeactivate(
    component: InvoiceNewComponent ,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}

