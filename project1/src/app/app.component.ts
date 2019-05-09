import { Component } from '@angular/core';
// import { AuthService } from './shered/services/auth.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';
import { UserService } from './shered/services/user.service';
import { AuthService } from './shered/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';
  
  constructor(private auth: AuthService, router:Router,private userService: UserService){
    auth.user$.subscribe(user => {
      if(!user) return; 

      userService.save(user);
      let returnUrl= localStorage.getItem('returnUrl');
      if(!returnUrl) return ;
        
      localStorage.removeItem('returnUrl');
      router.navigateByUrl(returnUrl);
        
    })
  }
}
