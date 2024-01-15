import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent {
  // user = {
  //   name: 'Doe',
  //   firstName: 'John',
  //   age: 25,
  //   quote: '',
  //   photo: 'https://randomuser.me/api/portraits/lego/2.jpg',
  // };

  user: User = new User(
    'Doe',
    'John',
    25,
    '',
    'https://randomuser.me/api/portraits/lego/2.jpg'
  );

  @Input() biography!: string;

  showAge: boolean = false;

  toggleAge(): void {
    this.showAge = !this.showAge;
  }
}
