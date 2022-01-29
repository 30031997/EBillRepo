import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog,MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';
import { RegistrationModel } from '../shared/RegistrationModel';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  customer= new RegistrationModel();


  constructor(public dialogRef: MatDialogRef<SignupComponent>,private service:UserService,private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    console.log(form.value);
    this.service.register(form.value).subscribe(
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
