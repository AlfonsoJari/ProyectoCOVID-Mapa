import { Component, OnInit } from '@angular/core';
import { GraphqlService } from '../graphql.service';

@Component({
  selector: 'app-signup-graph',
  templateUrl: './signup-graph.component.html',
  styleUrls: ['./signup-graph.component.css']
})
export class SignupGraphComponent implements OnInit {
  cadena = "";
  result = '';
  username = '';
  password = '';
  email = '';

  constructor(private service: GraphqlService) { }

  ngOnInit(): void {
  }

  newuser() {
    if (this.username == "" || this.password == "" || this.email == "") {
      alert("Falta rellenar campos")
    } else {
      this.service.newUser(this.username, this.email, this.password);
    }
  }

  redireccion() {
    this.cadena = window.location.href;
    location.href = this.cadena.slice(0, -12)+'/login-graph';
  }

}
