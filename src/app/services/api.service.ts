import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API : string ="https://forecastapi.mybluemix.net/event/"
  constructor(
    private http : HttpClient,  
  ) { }

  reportar(item:any): Observable<any>{
    console.log(item)
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' :'application/json',
      })      
    }
    return this.http.post(this.API,item,httpOptions);  
  }
}
