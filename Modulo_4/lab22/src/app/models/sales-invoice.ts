import {Customer} from "./customer";

export class SalesInvoice {
    id: number;
    customer: Customer;    
    invoiceAmount: number;
    tax: number;
}