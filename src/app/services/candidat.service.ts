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
  private apiUrl='http://127.0.0.1:5000/candidats/get_all_candidates/1';
  private baseUrl='http://127.0.0.1:5000/candidats/create_candidate';
  private url = 'http://127.0.0.1:5000/candidats/get_candidate_by_id';

  
  BaseUrl = environment.api

  constructor(private http: HttpClient) { }

  getcandidat():Observable<any>{
    return this.http.get(this.apiUrl)
  }

  creer(data:any):Observable<any>{
    const url = `${this.baseUrl}`;
    return this.http.post(url, data)
  }

  getcandidatbyid(id:any):Observable<any>{
    return this.http.get(`${this.url}/${id}`);
  }

  // getCandid() {
  //   return this.candid;
  // }

  getContactsForAccount(accountId: number): Observable<any> {
    return this.http.get(`${this.BaseUrl}account/${accountId}/contacts`,httpOptions3);
  }

  getAllContacts(): Observable<any> {
    return this.http.get(`${this.BaseUrl}contacts`,httpOptions3);
  }
}
