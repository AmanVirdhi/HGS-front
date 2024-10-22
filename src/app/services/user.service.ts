import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { login, signUp } from '../shared/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  isUserLoggedIn= new BehaviorSubject<boolean>(false);
  isLoginError= new EventEmitter<boolean>(false)
  constructor(private http:HttpClient, private router:Router) { }

  userSignUp(data:signUp){
    console.log("leel", data);
    return this.http.post('https://hgs-api.onrender.com/hgsapp/signup/', data, { observe: 'response' });
  } 

  reloadUser(){
    if(localStorage.getItem('user')){
      this.isUserLoggedIn.next(true)
      this.router.navigate(['home'])
    }
  }

  // userLogin(data:login){
  //   this.http.get(`https://hgs-api.onrender.com/hgsapp/signup/?email=${data.email}&password=${data.password}`,
  //   {observe:'response'}).subscribe((result:any)=>{
  //    if(result && result.body && result.body.length===1){
  //      this.isLoginError.emit(false)
  //      localStorage.setItem('user',JSON.stringify(result.body))
  //      this.router.navigate(['home'])
  //    }else{
  //      this.isLoginError.emit(true)
  //    }
  //   })
  //  }

  userLogin(data: login) {
    console.log("Login data:", data);  // Log the data being sent
    this.http.post('https://hgs-api.onrender.com/hgsapp/login/', data, { observe: 'response' })
      .subscribe((result: any) => {
        if (result && result.body && result.body.token) {
          this.isLoginError.emit(false);
          localStorage.setItem('user', JSON.stringify(result.body));
          this.router.navigate(['home']);
        } else {
          this.isLoginError.emit(true);
        }
      }, error => {
        console.error('Login error:', error);  // Log the error for debugging
        this.isLoginError.emit(true);
      });
}

}
