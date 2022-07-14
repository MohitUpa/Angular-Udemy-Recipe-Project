import { AfterContentInit, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit{
  title = 'my-first-project';
  name = 'Mohit Upadhyay';


  constructor() {
    // console.log("constructor called.....");
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log("ngOnChanges called.....");
    // console.log(changes);
  }

  ngOnInit(): void {
    // console.log("ngOnInit called.....");
  }

  ngDoCheck(){
    // console.log("ngDoCheck called.....");
  }

  ngAfterContentInit(){
    // console.log("ngAfterContentInit called.....");
  }

  ngAfterViewInit(){
    // console.log("ngAfterViewInit called.....");
  }

}
// how the module work come under .ts file 


