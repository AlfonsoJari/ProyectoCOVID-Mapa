import { Component, OnInit } from '@angular/core';
import { UserApi } from "../../models/userapi";
//import { User } from "../../models/user";
import { UsersService } from "../../services/users.service"
import { StorageService } from "../../services/storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  cadena="";
  result = '';
  username = '';
  password = '';

  constructor(
    private usersService: UsersService,
		private storageService: StorageService
  ) { }

  ngOnInit(): void {
  }

  addition() {
    let myresult = 'token here !!!';
    //myresult = addition(this.operator1, this.operator2);

    var mydata = new UserApi;

		if(this.username == "" || this.password == ""){

			alert('USUARIO Y CONTRASEÑA REQUERIDOS');

		}else{

		mydata.username = this.username;
		mydata.password = this.password;

		return this.usersService.loginUser(mydata)
		 .subscribe((data: any) => {

			this.storageService.setLocal("token", data.accessToken);		  
      this.result = data.accessToken;
      //alert(data.accessToken);
      this.cadena = window.location.href;
      //alert(this.cadena.slice(0,-5))
      location.href = this.cadena.slice(0,-5);
		})
		}
    this.result = myresult;
  }

}
