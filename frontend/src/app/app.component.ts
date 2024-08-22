import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BlogsComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}

