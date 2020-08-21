import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserdashComponent } from './components/userdash/userdash.component';
import { RoughWorkComponent } from './components/rough-work/rough-work.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'userdash' , component:UserdashComponent },
  { path: 'rough' , component:RoughWorkComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
