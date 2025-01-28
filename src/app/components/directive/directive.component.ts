import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive',
  imports: [NgIf, FormsModule, NgFor, NgClass],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css',
})
export class DirectiveComponent {
  isDiv1Vis: boolean = false;
  isdiv2vis = false;
  studDivClsName: string = 'bg-success';
  stuEmpDivClass = '';
  num1 = 0;
  num2 = 1;
  selectedCast: string = '';
  prodClass = '';
  isOrderActive: boolean = false;

  cityList: string[] = ['Pune', 'Mumbai', 'Nagpur', 'Thane'];
  studentList: any[] = [
    {
      name: 'A',
      city: 'Pune',
      isActive: true,
    },
    {
      name: 'B',
      city: 'Mumbai',
      isActive: true,
    },
    {
      name: 'C',
      city: 'Nagpur',
      isActive: false,
    },
    {
      name: 'D',
      city: 'Thane',
      isActive: true,
    },
    {
      name: 'E',
      city: 'Pune',
      isActive: true,
    },
  ];

  show() {
    this.isDiv1Vis = true;
  }

  hide() {
    this.isDiv1Vis = false;
  }

  hideShow2(display: boolean) {
    this.isdiv2vis = display;
  }

  addProdClass(color: string) {
    if (color == 'red') {
      this.prodClass = 'bg-danger';
    } else {
      this.prodClass = 'bg-success';
    }
  }
}
