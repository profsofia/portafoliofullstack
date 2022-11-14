import { Component, OnInit } from '@angular/core';
import { LinkModel } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links : Array<LinkModel> =[
    {
      link:'mailto: sofiainesschenone@gmail.com',
      icon: '<i class="uil uil-envelope-edit"></i>'
    },
    {
      link:'https://www.linkedin.com/in/sofiaschenone/',
      icon: '<i class="uil uil-linkedin"></i>'
    },
    {
      link:'https://github.com/profsofia',
      icon: '<i class="uil uil-github"></i>'
    },
    {
      link:'https://www.youtube.com/channel/UCcSErMMrU9eYeT93L-87n-w',
      icon: '<i class="uil uil-youtube"></i>'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
