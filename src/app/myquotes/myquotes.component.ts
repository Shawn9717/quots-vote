import { Component, Input, OnInit } from '@angular/core';
import { Myquotes } from '../myquotes';


@Component({
  selector: 'app-myquotes',
  templateUrl: './myquotes.component.html',
  styleUrls: ['./myquotes.component.css']
})
export class MyquotesComponent implements OnInit {
  @Input() articles!:Myquotes
  vote_up(){
    this.articles.voteUp
  }   

  vote_down(){
    this.articles.voteDown()
  }

  ngOnInit(): void {
  }

}
