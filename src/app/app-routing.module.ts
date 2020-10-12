import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { LoginComponent  } from './login/login.component'
import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [
  {
    path:'',
    component: LandingpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
