import {InMemoryDbService} from "angular2-in-memory-web-api";
import {Product} from "../models/product";
import {SalesInvoice} from "../models/sales-invoice";
import {SALES_INVOICES} from "./sales-invoice-mock"

export class InMemorySalesInvoiceService implements InMemoryDbService {
  createDb() {
    let salesInvoices:SalesInvoice[]= SALES_INVOICES;
    return {salesInvoices};
  }

}
