import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-adminpay',
  templateUrl: './adminpay.component.html',
  styleUrls: ['./adminpay.component.scss']
})
export class AdminpayComponent implements OnInit {

  payments:any;

  constructor(private service:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.getAllPaymentDetails();
  }

  getAllPaymentDetails(){
    this.service.getAllPayments()
    .subscribe(res=>{
      this.payments = res;
    })
  }
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  deletePayment(id:any){
    this.service.deletePayment(id)
      .subscribe(res=>{
        window.alert(res.message);
      });
      this.router.navigateByUrl('/admin-payments');
  }

}
