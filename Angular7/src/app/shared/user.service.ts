import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'http://localhost:61263/api'

  formModel = this.fb.group({
    UserName : ['', [Validators.required, Validators.minLength(6)]],
    Email : ['', Validators.email],
    FirstName : ['', [Validators.required, Validators.minLength(2)]],
    LastName : ['', [Validators.required, Validators.minLength(2)]],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords }),
    City : ['', Validators.required],
    ZipCode : ['', Validators.required],
    StreetName : [''],
    StreetNumber : ['', Validators.required]
  });

  comparePasswords(fb: FormGroup){
    let confirmPasswordCtrl = fb.get('ConfirmPassword');
    if (confirmPasswordCtrl.errors == null || 'passwordMismatch' in confirmPasswordCtrl.errors){
      if (fb.get('Password').value != confirmPasswordCtrl.value) {
        confirmPasswordCtrl.setErrors({passwordMismatch: true});
      } else {
        confirmPasswordCtrl.setErrors(null);
      }
    }
  }

  register(){
    var body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      FirstName: this.formModel.value.FirstName,
      LastName: this.formModel.value.LastName,
      Password: this.formModel.value.Passwords.Password,
      City: this.formModel.value.City,
      ZipCode: this.formModel.value.ZipCode,
      StreetName: this.formModel.value.StreetName,
      StreetNumber: this.formModel.value.StreetNumber
    };
    return this.http.post(this.BaseURI + '/ApplicationUser/Register', body);
  }

  login(formData) {
    return this.http.post(this.BaseURI + '/ApplicationUser/Login', formData);
  }

  getUserProfile(){
    return this.http.get(this.BaseURI + '/UserProfile');
  }

  roleMatch(allowedRoles): boolean {
    var isMatch = false;
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    var userRole = payLoad.role;
    allowedRoles.forEach(element => {
      if (userRole == element) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }
}
