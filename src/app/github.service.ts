import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  url = 'https://api.github.com/users/profsofia/repos';

  constructor( private httpClient : HttpClient) { }

  loadRepos = () => this.httpClient.get(this.url);
}
