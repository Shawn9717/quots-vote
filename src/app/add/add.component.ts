import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
add_artical(title:HTMLInputElement , quote:HTMLInputElement){
console.log(title.value)
}
  constructor() { }

  ngOnInit(): void {
  }

}


