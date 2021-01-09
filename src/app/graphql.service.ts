import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import { UserType } from './types/userType';
import { UserInputType } from './types/userInputType';
import { StorageService } from "../services/storage.service";
import { TokenType } from "./types/tokenType"
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})

export class GraphqlService {
  public users: UserType[];
  public user: UserType;
  public token;
  public cadena="";
  public createdUser: UserType;
  public updatedUser: UserType;
  constructor(private apollo: Apollo, httpLink: HttpLink, private storageService: StorageService) {
    apollo.create({
      link: httpLink.create({ uri: 'http://34.97.225.164:5003/graphql/' }),
      cache: new InMemoryCache()
    })
  }
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    }
    catch (Error) {
      return null;
    }
  }

  public getToken = (username1: string, password1: string) => {
    localStorage.removeItem("usuario");
    this.apollo.mutate<any>({
      mutation: gql`mutation ($username: String!, $password: String!){
          tokenAuth(username: $username, password: $password){
            token
          }
        }`,
      variables: { username: username1, password: password1 }
    }).subscribe(result => {
      let token = result.data;
      const userStr = JSON.stringify(token);
      console.log(userStr);
      console.log(userStr.slice(23, -37));
      this.token = userStr.slice(23, -37).toString();
      console.log(this.token);
      //localStorage.setItem("Usuario",this.getDecodedAccessToken(this.token));
      //console.log(localStorage.getItem("Usuario"))
      console.log(this.getDecodedAccessToken(this.token));
      this.user = jwt_decode(this.token);
      console.log(this.user.username);
      localStorage.setItem("usuario", this.user.username);
      this.cadena = window.location.href;
      location.href = this.cadena.slice(0, -11);
    })
  }

  public newUser = (username1: string, email1:string, password1: string) => {
    this.apollo.mutate({
      mutation: gql`mutation($username: String!, $email: String!, $password: String!){
        createUser(
          username: $username,
          email: $email,
          password:$password
        ){
          user
          {
            id,
            username,
            email
          }
        }
      }`,
      variables: { username: username1, email:email1, password: password1 }
    }).subscribe(result => {
      let resp = result.data;
      this.cadena = window.location.href;
      location.href = this.cadena.slice(0, -12);
    })
  }
}