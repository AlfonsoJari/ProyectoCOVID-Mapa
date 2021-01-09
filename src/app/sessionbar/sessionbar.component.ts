import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sessionbar',
  templateUrl: './sessionbar.component.html',
  styleUrls: ['./sessionbar.component.css']
})
export class SessionbarComponent implements OnInit {

  token=localStorage.getItem("token");
  usuario=localStorage.getItem("usuario");

  constructor() { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    location.href = window.location.href;;
  }

  consultar(){
    console.log(localStorage.getItem("usuario"))
  }

}
