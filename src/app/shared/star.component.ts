import { Component, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector:"pm-star",
  templateUrl:"./star.component.html",
  styleUrls:["./star.component.css"]
})
export class StarComponent implements OnChanges{

  //star component rating process
  rating : number = 4;
  cropWidth: number = 75;

  //life cycle hook for the star rating process

  ngOnChanges(): void {
      this.cropWidth = this.rating * 75/5;
  }
}
