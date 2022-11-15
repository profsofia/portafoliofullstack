import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  url = 'https://api.github.com/users/profsofia/repos';

  constructor(private httpClient: HttpClient) {}

  loadRepos = () => {
    return this.httpClient.get(this.url).pipe(
      map((item:any)=>item.filter(value => !value.fork && value.description && value.name !='portafolio'))
    );
  };
}
