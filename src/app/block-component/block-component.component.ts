import { Component } from '@angular/core';

@Component({
  selector: 'app-block-component',
  standalone: true,
  imports: [],
  templateUrl: './block-component.component.html',
  styleUrl: './block-component.component.scss',
})
export class BlockComponentComponent {
  content = 'A B C';
}
