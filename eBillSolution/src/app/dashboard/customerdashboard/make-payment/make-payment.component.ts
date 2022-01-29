import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.scss']
})
export class MakePaymentComponent implements OnInit {

  payment={
    billId: 0,
    customerId:0,
    paymentMethod:''
  };
  constructor(private service:CustomerService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    console.log(this.payment)
    this.service.makePayment(this.payment).subscribe(
      (res: any) => {
        window.alert(res.message);
      },
      err => {
        // if (err.status == 400)
        //   this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        // else
          console.log(err);
      }
    );
  }
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
