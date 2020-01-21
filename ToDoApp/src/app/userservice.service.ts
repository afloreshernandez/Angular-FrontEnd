import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timingSafeEqual } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  uri = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.uri}`);

  }

  validateUser(userId){
    return this.http.get(`${this.uri}/users/${userId}`);
  }

}
