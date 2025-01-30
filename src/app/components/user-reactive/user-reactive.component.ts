import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './user-reactive.component.html',
  styleUrl: './user-reactive.component.css',
})
export class UserReactiveComponent {
  httpClient = inject(HttpClient);
  userList: any[] = [];
  isSideFormVisible: boolean = false;

  userForm: FormGroup = new FormGroup({
    // controls or properties
    userId: new FormControl(0),
    userName: new FormControl(''),
    emailId: new FormControl(''),
    fullName: new FormControl(''),
    role: new FormControl(''),
    createdDate: new FormControl(new Date()),
    password: new FormControl(''),
    projectName: new FormControl(''),
    refreshToken: new FormControl(''),
    refreshTokenExpiryTime: new FormControl(new Date()),
  });

  constructor() {
    this.getUsers();
  }

  toggleSideForm() {
    this.isSideFormVisible = !this.isSideFormVisible;
  }

  getUsers() {
    this.httpClient
      .get('https://projectapi.gerasim.in/api/Complaint/GetAllUsers')
      .subscribe((res: any) => {
        this.userList = res.data;
      });
  }

  onSave() {
    const formValue = this.userForm.value;
    this.httpClient
      .post('https://projectapi.gerasim.in/api/Complaint/AddNewUser', formValue)
      .subscribe((res: any) => {
        this.getUsers();
      });
  }
}
