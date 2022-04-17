import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-demo';
  isChecked = true;

  onChange($event){
    console.log($event);
  }

  colors = [
    {id : 1, name: 'Red'},
    {id : 2, name: 'Green'},
    {id : 3, name: 'Blue'},
  ]

color = 2;

minDate = new Date(2017, 1, 2);
maxDate = new Date(2019, 1, 2);

}
