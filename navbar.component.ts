import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  jsonuser:any;
  user:any;
  username:any;
 constructor(private router:Router){}
  
  ngOnInit(){
   if(localStorage.getItem("loggeduser")==null){
    this.router.navigateByUrl("/login")
   }

  else{
    this.jsonuser=localStorage.getItem('loggeduser');
    this.user=JSON.parse(this.jsonuser);
    this.username=this.user.username
  }


}
  logout(){
    localStorage.removeItem('loggeduser')
    this.router.navigateByUrl('/login')
  }
  
}
