import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';

import { RegistrationModel } from 'src/app/shared/RegistrationModel';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  customer= new RegistrationModel();


  constructor(public dialogRef: MatDialogRef<AddCustomerComponent>,private service:AdminService,private router: Router, private toastr: ToastrService) { }


  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    console.log(form.value);
    this.service.addCustomer(form.value).subscribe(
      (res: any) =>{
          form.reset();
          this.dialogRef.close();
          window.alert(res.message);
          this.toastr.success('New User Created!','Registration Succesfull.');
      },
      err => {
        console.log(err);
      }
    );
  }
}
