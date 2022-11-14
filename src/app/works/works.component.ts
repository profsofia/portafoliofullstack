import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  repos : any;
  config : any;

  constructor(private githubService : GithubService) { }

  ngOnInit(): void {
    this.githubService.loadRepos().subscribe(res =>{
      this.repos = res;
    })
  }

}
