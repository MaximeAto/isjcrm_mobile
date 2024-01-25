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
export class CandidatService {
  
  BaseUrl = environment.api

  constructor(private http: HttpClient) { }

  getContactsForAccount(accountId: number): Observable<any> {
    return this.http.get(`${this.BaseUrl}account/${accountId}/contacts`,httpOptions3);
  }

  getAllContacts(): Observable<any> {
    return this.http.get(`${this.BaseUrl}contacts`,httpOptions3);
  }
}
