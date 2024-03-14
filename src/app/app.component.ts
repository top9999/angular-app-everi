import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';

  constructor(private location: Location) {}
  
  goBack() {
    this.location.back();
  }
}
