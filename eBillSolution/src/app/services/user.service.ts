import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, 
        Validators} from '@angular/forms';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private fb:FormBuilder,private http:HttpClient) { }
  readonly BaseURI = 'https://localhost:44313/api';
  public loggedIn! : boolean;
  // formModel = this.fb.group({
  //   customerType : [' ',Validators.required],
  //   customerEmail : ['',Validators.email],
  //   customerName : ['',Validators.required],
  //   electricityBoardId : [0,Validators.required],
  //   customerQuestion : ['',Validators.required],
  //   customerAnswer : ['',Validators.required],
  //   customerContactNo : ['',Validators.required],
  //   customerAddress : ['',Validators.required],
  //   Passwords : this.fb.group({
  //     Password : ['',[Validators.required,Validators.minLength(4)]],
  //     ConfirmPassword : ['',Validators.required]
  //   },{validator:this.comparePasswords})
  // });

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
    if (confirmPswrdCtrl?.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password')?.value != confirmPswrdCtrl?.value)
        confirmPswrdCtrl?.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl?.setErrors(null);
    }
  }

  register(formData: any) {
    return this.http.post(this.BaseURI + '/AccountLogIn/CustomerRegistration', formData)
    .pipe(map((res:any)=>{
      return res;
    }));
  }

  login(formData: any) {
    console.log(formData);
    return this.http.post(this.BaseURI + '/AccountLogIn/Login', formData)
    .pipe(map((res:any)=>{
      return res;
    }));
  }

  forgetPassword(formData: any) {
    return this.http.put(this.BaseURI + '/AccountLogIn/ForgetPassword', formData)
    .pipe(map((res:any)=>{
      return res;
    }));
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('emailID');
    localStorage.removeItem('role');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('customers');
    localStorage.removeItem('bills');
    localStorage.removeItem('payments');
    
    this.loggedIn = false;
    //this._authNavStatusSource.next(false);
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
