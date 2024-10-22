import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showLogoutButton: boolean = false;
  userName:string="";
  constructor(private router: Router) {}

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if (user) {
      this.showLogoutButton = true; // User is logged in
      this.userName = JSON.parse(user).username; // Set userName from localStorage
    } else {
      this.showLogoutButton = false; // User is not logged in
    }
  }

  
  Logout() {
    localStorage.removeItem('user');
    this.showLogoutButton = false; // Hide logout button
    this.router.navigate(['/']);
  }

}
