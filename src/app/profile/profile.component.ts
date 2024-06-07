import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;

  editName: string;
  editLastName: string;
  editEmail: string;
  editPhoto: string;

  constructor() {
    this.user = new User(0, '', '', '', 'assets/img/profile-pic.jpg', '');

    this.editName = this.user.name;
    this.editLastName = this.user.last_name;
    this.editEmail = this.user.email;
    this.editPhoto = this.user.photo;
  }

  ngOnInit(): void {
  }

  updateUser(): void {
    this.user.name = this.editName;
    this.user.last_name = this.editLastName;
    this.user.email = this.editEmail;
    this.user.photo = this.editPhoto;
    console.log(this.user);
  }
}
