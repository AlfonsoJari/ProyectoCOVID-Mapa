import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sessionbar',
  templateUrl: './sessionbar.component.html',
  styleUrls: ['./sessionbar.component.css']
})
export class SessionbarComponent implements OnInit {

  token=localStorage.getItem("token");

  constructor() { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem("token");
    location.href = window.location.href;;
  }



}
