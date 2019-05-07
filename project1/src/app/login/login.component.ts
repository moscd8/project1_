import { Component, OnInit } from '@angular/core';
import { User } from './user';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted : boolean= false;
  userTemp: User;
  userModel = new User();


  onSubmit (userform) {
    this.submitted =true; 
    var username= userform.value.username;
    var email= userform.value.email;
    var password= userform.value.password;
    
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
  constructor(private auth: AuthService) { 
   }

  ngOnInit() {
  }

  login(){
   this.auth.login(); 
  }

}
