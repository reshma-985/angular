import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
username:any;
password:any;
user:any;
  constructor(private router:Router){

  }
 submit(){
  this.user=this.username. slice(0,3)+"123"
   if(this.password==this.user){
    localStorage.setItem('loggeduser',JSON.stringify(this.user));
    this.router.navigateByUrl('/user/home');
  }
   }
  
 }
 

