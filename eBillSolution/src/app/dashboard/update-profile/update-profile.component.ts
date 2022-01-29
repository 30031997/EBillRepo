import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { UpdateProfileModel } from 'src/app/shared/updateProfile.model';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {
  user={
    id: 0,
    role:'',
    name:'',
    email:'',
    contanctNo:''
  };
  constructor(private service:AdminService) { }

  ngOnInit(): void {
    var id=localStorage.getItem('id');
    var role=localStorage.getItem('role');
    if(id!=null){
      this.user.id=parseInt(id) ;
    }
    if(role!=null){
      this.user.role=role;
    }
    console.log(id,role);
    
  }
  onSubmit(form: NgForm){
    console.log(this.user)
    this.service.updateProfile(this.user).subscribe(
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
