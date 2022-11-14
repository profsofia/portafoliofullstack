import { Component, OnInit } from '@angular/core';
// @ts-ignore
import Typewriter from 't-writer.js';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor() {}
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
  ngOnInit(): void {
    // target element  <div class="tw"></div>

    const target = document.querySelector('.tw');

    const options = {
      loop: true,
    };

    //const writer = new Typewriter(target, options);
    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: 'white'
    })

    writer
      .changeCursorColor('white')
      .type('Angular')
      .rest(500)
      .changeOps({ deleteSpeed: 80 })
      .remove(7)
      .type('Java')
      .rest(500)
      .remove(4)
      .type('Spring Boot')
      .rest(500)
      .changeOps({ deleteSpeed: 20 })
      .remove(21)
      .type('HTML')
      .rest(500)
      .clear()
      .start()
  }
}

export class LinkModel{
  link: string;
  icon: string;

}
