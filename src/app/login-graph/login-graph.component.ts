import { Component, OnInit } from '@angular/core';
import { GraphqlService } from '../graphql.service';

@Component({
  selector: 'app-login-graph',
  templateUrl: './login-graph.component.html',
  styleUrls: ['./login-graph.component.css']
})
export class LoginGraphComponent implements OnInit {
  cadena = "";
  result = '';
  username = '';
  password = '';
  constructor(private service: GraphqlService) { }

  ngOnInit(): void {
  }

  logeo() {
    if (this.username == "" || this.password == "") {
      alert('USUARIO Y CONTRASEÑA REQUERIDOS');

    } else {
      //this.cadena = window.location.href;
      this.service.getToken(this.username, this.password);
      //location.href = this.cadena.slice(0,-11);  
    }
  }

}
