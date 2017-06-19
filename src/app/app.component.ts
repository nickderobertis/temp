import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: `app/app.component.html`,
  styleUrls: ['app/app.component.css']
})
export class AppComponent implements OnInit {
  wrapSlides: boolean = true;
	myInterval: number = 1000;
	images:Array<Object> = [];
  
  ngOnInit(): void {
    setTimeout(() => {
      this.images.push({imageIdentifier: 'sample'});
      this.images.push({imageIdentifier: 'couple'});
      this.images.push({imageIdentifier: 'nice_couple'});      
    }, 5000)
  }  
}
