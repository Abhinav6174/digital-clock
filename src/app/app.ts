import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Clock } from "./clock/clock";

@Component({
  selector: 'app-root',
  imports: [Clock],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Digital Column Clock';
}
