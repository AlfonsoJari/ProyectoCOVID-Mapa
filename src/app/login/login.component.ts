import { Component, OnInit } from '@angular/core';
import { UserApi } from "../../models/userapi";
//import { User } from "../../models/user";
import { UsersService } from "../../services/users.service"
import { StorageService } from "../../services/storage.service";
import { VisitaModel } from 'src/models/visitaModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  cadena = "";
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

    if (this.username == "" || this.password == "") {

      alert('USUARIO Y CONTRASEÑA REQUERIDOS');

    } else {

      mydata.username = this.username;
      mydata.password = this.password;
      return this.usersService.loginUser(mydata)
        .subscribe((data: any) => {
          this.storageService.setLocal("token", data.accessToken);
          this.result = data.accessToken;
          //alert(data.accessToken);
          let visita = new VisitaModel;
          visita.id = 1;
          visita.visitas = parseInt(sessionStorage.getItem("visitas")) + 1;
          this.usersService.registrarVisitas(visita).subscribe((data: VisitaModel) => {
            this.storageService.setSession("visitas", data.visitas);
            this.cadena = window.location.href;
            //alert(this.cadena.slice(0,-5))
            location.href = this.cadena.slice(0, -5);
          })
        })
    }
    this.result = myresult;
  }

}
