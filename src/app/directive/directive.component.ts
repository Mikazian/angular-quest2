import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.scss',
})
export class DirectiveComponent {
  title: string = 'Bonjour!';

  role: string = 'admin' || 'user';

  isAdmin: boolean = false;

  switchRole(): void {
    this.role = this.role === 'admin' ? 'user' : 'admin';
    this.isAdmin = !this.isAdmin;
  }
}
