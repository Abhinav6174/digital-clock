import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clock',
  imports: [CommonModule],
  templateUrl: './clock.html',
  styleUrl: './clock.css',
  encapsulation: ViewEncapsulation.None
})
export class Clock {
  currentTimeDigits: number[] = [];

  digitHeight = 30; // px per digit

  // Different bar ranges (like your image)
  barDigitRanges: number[][] = [
    [0, 1, 2],                         // H1 (0–2)
    Array.from({ length: 10 }, (_, i) => i),  // H2
    [0, 1, 2, 3, 4, 5],                // M1 (0–5)
    Array.from({ length: 10 }, (_, i) => i),  // M2
    [0, 1, 2, 3, 4, 5],                // S1 (0–5)
    Array.from({ length: 10 }, (_, i) => i)   // S2
  ];

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime(): void {
    const now = new Date();
    const timeStr =
      now.getHours().toString().padStart(2, '0') +
      now.getMinutes().toString().padStart(2, '0') +
      now.getSeconds().toString().padStart(2, '0');
    this.currentTimeDigits = timeStr.split('').map(Number);
  }

  trackByIndex(index: number, _: any): number {
    return index;
  }

  getBarNumbers(index: number): number[] {
    return this.barDigitRanges[index];
  }

  getMarginTop(digit: number, index: number): number {
    const bar = this.barDigitRanges[index];
    const digitIndex = bar.indexOf(digit);
    const halfViewport = this.getColumnViewportHeight(index) / 2;
    const marginTop = -1 * digitIndex * this.digitHeight + halfViewport - (this.digitHeight / 2);
    return marginTop;
  }

  getColumnViewportHeight(index: number): number {
    // fixed visible area height (show one digit centered)
    return this.digitHeight * 5; // show 5 digits visible space
    // return this.barDigitRanges[index].length * this.digitHeight;
  }

}