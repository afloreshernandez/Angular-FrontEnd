import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from  '@angular/forms'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  returnedId;
  userId;
  form : FormGroup;

  constructor(private userService : UserserviceService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.form = this.fb.group({
      userName: ['', Validators.required], 
      userPassword: ['', Validators.required]
    });
  }

  validateUser(id, password){
      this.returnedId = this.userService.getUserById(id);
      console.log(this.returnedId);
      if(this.returnedId == -1){
        console.log(this.returnedId);
        //user is not valid
      }else{
        this.userId = this.returnedId;
        console.log(this.userId);
      }
  }

  onSubmit(userId, userPassword){
     this.validateUser(userId, userPassword);
    // this.returnedId = this.userService.getUserById(userId);
    // console.log(this.returnedId);
    
  }

}
