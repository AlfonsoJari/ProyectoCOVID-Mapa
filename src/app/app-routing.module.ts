import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent  } from './login/login.component'
import { LandingpageComponent } from './landingpage/landingpage.component';
import { MapComponent } from './map/map.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'',
    component: LandingpageComponent
  },
  {
    path:'template',
    component: MapComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'signup',
    component: SignupComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
