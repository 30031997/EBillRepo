import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog,MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginComponent } from '../login/login.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  forget={
    role:'',
    email:'',
    answer:'',
    newPassword:'',
    confirmPassword:''
  };
  constructor(public dialogRef: MatDialogRef<ForgetPasswordComponent>,private service:UserService,
    private router: Router, private toastr: ToastrService,) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    this.service.forgetPassword(form.value).subscribe(
      (res: any) => {
        this.dialogRef.close();
        this.router.navigateByUrl('/home');
        window.alert(res.message);
      },
      err => {
        if (err.status == 400)
          this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        else
          console.log(err);
      }
    );
  }
}
