import {TranslateService} from '@ngx-translate/core';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( public translate: TranslateService,) {
    translate.addLangs(['fr','en']);
    translate.setDefaultLang('fr');

    translate.use('fr');
  }

  ngOnInit() {
  }

}
