import { HttpClient } from '@angular/common/http';
import { createInjectableType } from '@angular/compiler';
import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})

export class userNameSearch {

  constructor(private http: HttpClient) {}

  // userName: string -- Input. Observable -- Output
  gitHub(userName: string): Observable<unknown> {
  return this.http.get("https://api.github.com/users/" + userName)
  }
}
