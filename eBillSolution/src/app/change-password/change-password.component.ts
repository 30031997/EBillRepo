import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  change={
    email: '',
    oldPassword:'',
    newPassword:'',
    confirmPassword:''
  };
  constructor(private adminservice:AdminService,private customerservice:CustomerService) { }

  ngOnInit(): void {
    var email=localStorage.getItem('emailID');
    if(email!=null){
      this.change.email=email;
    }
    
  }
  onSubmit(form: NgForm){
    console.log(this.change)
      this.adminservice.changePassword(this.change).subscribe(
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
