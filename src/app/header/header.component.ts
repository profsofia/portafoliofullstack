import { Component, OnInit } from '@angular/core';
import { LinkModel } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links : Array<LinkModel> =[
    { name:'Rest Countries',
      link:'https://paises-rest-country.netlify.app',
      icon: '<i class="uil uil-link-h"></i>'
    },
    { name:'Gif App',
      link:'https://gifappsofia.netlify.app',
      icon: '<i class="uil uil-link-h"></i>'
    },
    /*{
      link:'https://github.com/profsofia',
      icon: '<i class="uil uil-window"></i>'
    },
    {
      link:'https://pokedexangular-sofia.web.app/home',
      icon: '<i class="uil uil-window"></i>'
    }*/
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
