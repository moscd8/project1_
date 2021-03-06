import { Injectable } from '@angular/core'; 
import { AuthGuardService } from './auth-guard.service';  
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/internal/Observable';
import { CanActivate } from '@angular/router';
// import { AuthService } from './auth.service';

import { AuthService } from './auth.service';
import { UserService } from './user.service';



@Injectable( )
export class AdminAuthGuardService implements CanActivate{ 

  constructor(private auth: AuthService, private userService: UserService) { }
 
  canActivate(): Observable<boolean>{ 
    return this.auth.appUser$
    .map( appUser => 
          appUser.isAdmin
      );
     
  
} 
}
