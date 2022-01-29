export class BillModel{
    billId:number=0;
    customerId:number=0;
    customerName:string='';
    customerType:string='';
    electricityBoardId:number=0;
    customerAddress:string='';
    monthAndYearOfBill:string='';
    units:number=0;
    billAmount:number=0;
    duePaymentDate:Date | undefined;
    paymentStatus:string='';
    paymentId:number=0;
    paymentDate:Date | undefined;
    paymentMethod:string='';
 }