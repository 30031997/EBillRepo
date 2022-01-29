import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.scss']
})
export class AddBillComponent implements OnInit {

  bill={
    customerId: 0,
    units:0
  };
  constructor(private service:AdminService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    console.log(this.bill)
    this.service.addBill(this.bill).subscribe(
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
