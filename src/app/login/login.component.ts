import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { login, signUp } from '../shared/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isUserLoggedIn= new BehaviorSubject<boolean>(false);
  authError:String='';
  constructor (private user: UserService, private router: Router) {}

  ngOnInit(){
    this.user.reloadUser();
  }
  
  // onSignUp(data: signUp): void {
  //   this.user.userSignUp(data).subscribe((result)=>{
  //     if(result){
  //       this.router.navigate(['/home']);
  //     }
  //   });
  // }
  onSignUp(data: signUp): void {
    this.user.userSignUp(data).subscribe((result) => {
      if (result) {
        this.isUserLoggedIn.next(true); 
        localStorage.setItem('user', JSON.stringify(result.body));
        this.router.navigate(['/home']);
      }
    });
  }
  
  // onLogin(data: login):void{
  //   this.user.userLogin(data).subscribe((result) => {
  //     if (result) {
  //       this.isUserLoggedIn.next(true); 
  //       localStorage.setItem('user', JSON.stringify(result.body));
  //       this.router.navigate(['/home']);
  //     }
  //   });
  // }
  // onLogin(data: signUp): void {
  //   this.user.userLogin(data);
  //   this.user.isLoginError.subscribe((isError)=>{
  //     if(isError){
  //       this.authError="Email or password is invalid";
  //     }
  //   })
  // }
  onLogin(data: login): void {
    this.user.userLogin(data);
    this.user.isLoginError.subscribe((isError) => {
      if (isError) {
        this.authError = "Email or password is invalid";
      } else {
        this.authError = ''; // Clear the error message on successful login
      }
    });
  }

}
