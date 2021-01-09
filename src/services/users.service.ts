import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { ResponseApi } from '../models/responseapi';
import { UserApi } from '../models/userapi';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { NewUserApi } from 'src/models/newuserapi';

@Injectable({
  providedIn: 'root'
})

export class UsersService {



  // Define API
  // apiURL = 'https://kubeet-cfdi-api.appspot.com';
  //apiURL = 'https://api-imc-alexi.herokuapp.com';

  apiURL = 'http://34.97.225.164:5002';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  // HttpClient API post() method => Create employee
  loginUser(userApi): Observable<UserApi> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    console.log(JSON.stringify(userApi));
    return this.http.post<UserApi>(this.apiURL + '/api/auth/signin', JSON.stringify(userApi), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.MessageError)
      )
  }

  signupUser(newUserApi): Observable<NewUserApi> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    console.log(JSON.stringify(newUserApi));
    return this.http.post<NewUserApi>(this.apiURL + '/api/auth/signup', JSON.stringify(newUserApi), this.httpOptions)
      .pipe(
        retry(1)
      )
  }

  contar(): Observable<number> {
    if (localStorage.getItem("token") != null) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem("token").toString().slice(1, -1)
        })
      }
      console.log('Authorization' + ':' + 'Bearer ' + localStorage.getItem("token").toString().slice(1, -1));
      return this.http.get<number>(this.apiURL + '/cuenta', this.httpOptions)
        .pipe(
          retry(1),
          catchError(this.MessageError2)
        )
    } else {
      alert("Inicia sesión antes para ver los datos")
      return null;
    }
  }

  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  MessageError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      //errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      alert('USUARIO Y CONTRASEÑA INCORRECTOS');
    }
    //window.alert(errorMessage);
    return throwError(errorMessage);
  }

  MessageError2(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      //errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      alert('Inicia sesion primero');
    }
    //window.alert(errorMessage);
    return throwError(errorMessage);
  }

}