import { Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { TodoComponent } from './todo/todo.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { universalGuard } from './universal.guard';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { Component } from '@angular/core';
import { CustomerComponent } from './customer/customer.component';

export const routes: Routes = [
{path:"",redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'products',component:AddproductComponent},
{path:'orders',component:TableComponent,canActivate:[universalGuard]},
{path:'todo',component:TodoComponent},
{path:'todo/:task',component:TodoComponent},
{path:'login',component:LoginComponent},
{path:'customer',component:CustomerComponent},
{path:'logout',component:LogoutComponent},
{path:'reviews',loadComponent:async ()=>{const m = await import('./review/review.component');
return m.ReviewComponent;}},
{path:'**',component:NotfoundComponent}


];

