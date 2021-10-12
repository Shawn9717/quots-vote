import { Component } from '@angular/core';
import { Myquotes } from './myquotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Myquotes []

  constructor() {
    this.articles = [
        new Myquotes("Shawn","We are not makers of history. We are made by history.", 3),
        new Myquotes("Kamilla","No pain no gain", 2),
        new Myquotes("Shantel","Only God can judge you", 3),
        new Myquotes("Derick","No man is an inland no man stands alone", 3),
      ]
  }

}
