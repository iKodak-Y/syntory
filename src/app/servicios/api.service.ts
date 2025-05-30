import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlApi = 'http://localhost:3000/'
  constructor(
    private http: HttpClient
  ) { }

  public getMenu(): Observable<any> {
    return this.http.get<any>(this.urlApi + "menu");
  }

  public getInvoices(): Observable<any> {
    return this.http.get<any>(this.urlApi + "bill")
  }

  public getEmisor(): Observable<any> {
    return this.http.get<any>(this.urlApi + "emisor")
  }
}
