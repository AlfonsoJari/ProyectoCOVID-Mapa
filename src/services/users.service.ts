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
 apiURL = 'https://api-imc-alexi.herokuapp.com';

//apiURL = 'http://201.147.64.84:8083';

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
    console.log(JSON.stringify(userApi));
    return this.http.post<UserApi>(this.apiURL + '/api/auth/signin', JSON.stringify(userApi), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.MessageError)
    )
  }

  signupUser(newUserApi): Observable<NewUserApi> {
    console.log(JSON.stringify(newUserApi));
    return this.http.post<NewUserApi>(this.apiURL + '/api/auth/signup', JSON.stringify(newUserApi), this.httpOptions)
    .pipe(
      retry(1)
    )
  }



  // Error handling 
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
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
    if(error.error instanceof ErrorEvent) {
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

}