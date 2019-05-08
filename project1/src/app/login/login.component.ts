import { Component, OnInit } from '@angular/core';
// import { User } from './user';

import { AuthService } from '../shered/services/auth.service';
import { Appuser } from '../modules/app-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted : boolean= false;
  // userTemp: User;
  userModel: Appuser ; 

  constructor(private auth: AuthService) {}

  onSubmit (userform) {
    this.submitted =true; 
    this.userModel.name=userform.value.username;
    this.userModel.email=userform.value.email;
    this.userModel.password=userform.value.password;
    
    
    // var username= userform.value.username;
    // var email= userform.value.email;
    // var password= userform.value.password;
    
    //save the user 
    

    // onSubmit(value){
    //   this.firebaseService.createUser(value, this.avatarLink)
    //   .then(
    //     res => {
    //       this.resetFields();
    //       this.router.navigate(['/home']);
    //     }
    //   )
    // }
    
  } 

  ngOnInit() {
  }

  login(){
   this.auth.login(); 
  }

}
