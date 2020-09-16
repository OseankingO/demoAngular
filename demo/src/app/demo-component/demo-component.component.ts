import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-component',
  templateUrl: './demo-component.component.html',
  styleUrls: ['./demo-component.component.css']
})
export class DemoComponentComponent implements OnInit {

  interpolation : string = "Interpolation";
  propertyBinding : string = "I am using Property Binding!";
  eventBingding : string = "";
  twoWay : string = "I am using Two Way Binding!";

  constructor() { }

  buttonClick() {
    this.eventBingding = "Event Binding!";
  }

  ngOnInit(): void {
  }

}
