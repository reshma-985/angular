import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  
  {path:'',component:LoginComponent},
  {path:'user',component:NavbarComponent,
children : [
  {path:'home',component:HomeComponent},
  {path:'header',component:HeaderComponent},
  {path:'menu',component:MenuComponent},
  // {path:'about',component:AboutComponent},
  {path:'service',component:ServicesComponent},
  {path:'product',component:ProductComponent}
 
 
]
  },
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
