import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  httpClient = inject(HttpClient);
  userList: any[] = [];
  userObj: any = {
    userId: 0,
    userName: '',
    emailId: '',
    fullName: '',
    role: '',
    createdDate: new Date(),
    password: '',
    projectName: '',
    refreshToken: '',
    refreshTokenExpiryTime: new Date(),
  };

  constructor() {
    this.getUsers();
  }

  getUsers() {
    this.httpClient
      .get('https://projectapi.gerasim.in/api/Complaint/GetAllUsers')
      .subscribe((res: any) => {
        this.userList = res.data;
      });
  }

  onSaveUser() {
    this.httpClient
      .post(
        'https://projectapi.gerasim.in/api/Complaint/AddNewUser',
        this.userObj
      )
      .subscribe((res: any) => {
        this.getUsers();
      });
  }

  onUpdateUser() {
    this.httpClient
      .post(
        'https://projectapi.gerasim.in/api/Complaint/UpdateUser',
        this.userObj
      )
      .subscribe((res: any) => {
        this.getUsers();
      });
  }

  onDeleteUser(itemuserId: number) {
    const isConfirm = confirm('Are you sure you want to delete?');
    if (isConfirm) {
      this.httpClient
        .delete(
          'https://projectapi.gerasim.in/api/Complaint/DeleteUserByUserId?userId=' +
            itemuserId,
          this.userObj
        )
        .subscribe((res: any) => {
          this.getUsers();
        });
    }
  }

  onEdit(item: any) {
    this.userObj = item;
  }
}
