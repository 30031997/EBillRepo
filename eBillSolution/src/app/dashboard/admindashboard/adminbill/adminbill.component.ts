import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { BillModel } from 'src/app/shared/bill.model';

@Component({
  selector: 'app-adminbill',
  templateUrl: './adminbill.component.html',
  styleUrls: ['./adminbill.component.scss']
})
export class AdminbillComponent implements OnInit {

  bills!:[BillModel];

  constructor(private service:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.getAllBillDetails();
    console.log(this.bills);
  }

  getAllBillDetails(){
    this.service.getAllBills()
    .subscribe(res=>{
      this.bills = res;
    })
  }
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  deleteBill(id:any){
    this.service.deleteBill(id)
      .subscribe(res=>{
        window.alert(res.message);
      });
      this.router.navigateByUrl('/admin-bills');
  }
  update(){
    this.router.navigateByUrl('/updatePaymentStatus');
  }

}
