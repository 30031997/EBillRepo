import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-update-payments-in-bill',
  templateUrl: './update-payments-in-bill.component.html',
  styleUrls: ['./update-payments-in-bill.component.scss']
})
export class UpdatePaymentsInBillComponent implements OnInit {

  updateBill={
    paymentId: 0,
    billId: 0,
    paymentStatus:''
  };
  constructor(private service:AdminService) { }

  ngOnInit(): void {   
  }
  onSubmit(form: NgForm){
    console.log(this.updateBill)
    this.service.updatePaymentInBill(this.updateBill).subscribe(
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
