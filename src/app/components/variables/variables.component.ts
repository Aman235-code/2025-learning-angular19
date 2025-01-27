import { Component } from '@angular/core';

//decoractor
@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.component.html',
  styleUrl: './variables.component.css',
})
export class VariablesComponent {
  // string number date boolean - primitive
  firstName: string = 'aman';
  lastName: string = '';
  courseName: string;
  rollNo: number = 123;

  currentDate: Date = new Date();
  isActive: boolean = true;

  student: any; // any type of data can be stored

  // courseDuration = '3 hrs';

  constructor() {
    this.courseName = 'Angular 19';
    this.student = 'aman';
    this.student = 123;
    this.student = false;
  }
}
