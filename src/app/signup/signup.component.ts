import { Component, OnInit } from '@angular/core';
import { NewUserApi } from 'src/models/newuserapi';
import { StorageService } from 'src/services/storage.service';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  cadena = "";
  result = '';
  username = '';
  password = '';
  name = '';
  email = '';


  constructor(
    private usersService: UsersService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
  }

  newuser() {
    let myresult = 'token here !!!';
    //myresult = addition(this.operator1, this.operator2);
    var mydata = new NewUserApi;


    if (this.username == "" || this.password == "" || this.email == "" || this.name == "") {

      alert('CAMPOS REQUERIDOS');

    } else if (this.password.length <= 5) {
      alert('Contraseña de 6 caracteres mínimo');
    }
    else {

      mydata.username = this.username;
      mydata.password = this.password;
      mydata.name = this.name;
      mydata.email = this.email;
      mydata.role = [];
      mydata.role.push("user");

      //alert(JSON.stringify(mydata));

      this.usersService.signupUser(mydata)
        .subscribe((data: any) => {

        })
      this.cadena = window.location.href;
      location.href = this.cadena.slice(0, -6);
    }

  }

  redireccion() {
    this.cadena = window.location.href;
    location.href = this.cadena.slice(0, -6) + '/login';
  }

}
