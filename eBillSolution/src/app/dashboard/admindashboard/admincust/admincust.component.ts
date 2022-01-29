import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertmsgComponent } from 'src/app/alertmsg/alertmsg.component';
import { AdminService } from 'src/app/services/admin.service';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';


@Component({
  selector: 'app-admincust',
  templateUrl: './admincust.component.html',
  styleUrls: ['./admincust.component.scss']
})
export class AdmincustComponent implements OnInit {

  customers:any;
  
  constructor(public dialog: MatDialog,private service:AdminService, private router:Router) { }

  ngOnInit(): void {
    this.getAllCustomerDetails();
  }
  getAllCustomerDetails(){
      this.service.getAllCustomers()
      .subscribe(res=>{
        this.customers = res;
      })
  }
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  deleteCustomer(id:any){
    // this.dialog.open(AlertmsgComponent, {width: 'auto', height: 'auto'});
    this.service.deleteCustomer(id)
      .subscribe(res=>{
        window.alert(res.message);
      });
      this.router.navigateByUrl('/admin-customers');
  }
  update(){
    this.router.navigateByUrl('/admin-profile');
  }
  addCustomerForm() {
    this.dialog.open(AddCustomerComponent, {width: 'auto', height: 'auto'});
  }
  updateProfileForCustomer(id:number)
   {
     localStorage.setItem("CustomerU",id.toString())
    this.dialog.open(EditCustomerComponent, {width: 'auto', height: 'auto'});
  }
    
}
