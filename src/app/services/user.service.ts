import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const httpOptions3 = {
  headers: new HttpHeaders({}),
};

const httpOptions2 = {
  headers: new HttpHeaders({
    'Content-Type': 'text/plain', // modifier le Content-Type
  }),
};



@Injectable({
  providedIn: 'root'
})
export class UserService {

  BaseUrl = environment.api

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    console.log(email,password);
    
    return this.http.post(`${this.BaseUrl}login`, formData,httpOptions3);
  }
}
