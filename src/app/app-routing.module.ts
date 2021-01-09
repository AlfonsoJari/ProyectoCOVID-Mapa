import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent  } from './login/login.component'
import { LandingpageComponent } from './landingpage/landingpage.component';
import { MapComponent } from './map/map.component';
import { SignupComponent } from './signup/signup.component';
import { LoginGraphComponent } from './login-graph/login-graph.component';
import { SignupGraphComponent } from './signup-graph/signup-graph.component';

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
  },
  {
    path:'login-graph',
    component: LoginGraphComponent
  },
  {
    path:'signup-graph',
    component: SignupGraphComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
