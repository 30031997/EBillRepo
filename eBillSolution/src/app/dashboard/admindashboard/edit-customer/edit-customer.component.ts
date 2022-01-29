import { AdminService } from './../../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {
  user={
    id: 0,
    role:'CUSTOMER',
    name:'',
    email:'',
    contanctNo:''
  };
  constructor(public dialogRef: MatDialogRef<EditCustomerComponent>,private service:AdminService,private router:Router) { }

  ngOnInit(): void {
    var id=localStorage.getItem('CustomerU');
    if(id!=null){

      this.user.id=parseInt(id);
    }
  }
  onCancel(){
    this.router.navigateByUrl('/admin-profile'); 
  }
  onSubmit(form: NgForm){
    console.log(this.user)
    this.dialogRef.close();
    this.service.updateProfileForCustomer(this.user).subscribe(
      (res: any) => {
        window.alert(res.message);
        localStorage.removeItem('CustomerU');
      },
      err => {
        // if (err.status == 400)
        //   this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        // else
          console.log(err);
      }
    );
  }

}
