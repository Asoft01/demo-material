import { EditCourseComponent } from './edit-course/edit-course.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { Observable } from 'rxjs/Observable';
import { Observable, of } from 'rxjs';
// import 'rxjs/add/observable/timer';
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

categories = [
  { name: 'Beginner'},
  { name : 'Intermediate'},
  { name : 'Advanced' }
];

// selectCategory(category){
//   this.categories 
//     .filter(c => c != category)
//     .forEach(c => c['selected'] = false );

//     category.selected = !category.selected;
// }

progress = 0;

isLoading = false;

constructor(private dialog : MatDialog) {
  // this.timer = setInterval(()=> {
  //   this.progress ++;
  //   if(this.progress == 100) clearInterval(this.timer);
  // }, 20);

  // this.isLoading = true;
  // this.getCourses()
  //   .subscribe(x => this.isLoading = false);
}

  // getCourses(){
  //   return Observable.timer(2000);
  // }

  openDialog(){
    this.dialog.open(EditCourseComponent)
      .afterClosed()
      .subscribe(result=> console.log(result));
  }

}
