import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Park } from './models/Park';

@Injectable({
  providedIn: 'root'
})
export class ProxyApiService {

  private apiUrl = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  getParks = () => {
    return this.http.get<Park[]>(this.apiUrl + 'parks');
  }

  getParkById = (id: number) => {
    return this.http.get<Park>(this.apiUrl + 'parks/' + id)
  }
}
