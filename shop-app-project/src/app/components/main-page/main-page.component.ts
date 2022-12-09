import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  hovered:boolean=false

  constructor() { }

  ngOnInit(): void {
  }

  hoverParent(childHovered:any){
    this.hovered = childHovered;
  }

}
