import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { formatInTimeZone } from 'date-fns-tz';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-clock',
  imports: [CommonModule, ReactiveFormsModule,
    FormsModule],
  templateUrl: './clock.html',
  styleUrl: './clock.css',
  encapsulation: ViewEncapsulation.None
})
export class Clock {
  // currentTimeDigits: number[] = [];

  // digitHeight = 30; // px per digit

  // // Different bar ranges (like your image)
  // barDigitRanges: number[][] = [
  //   [0, 1, 2],                         // H1 (0–2)
  //   Array.from({ length: 10 }, (_, i) => i),  // H2
  //   [0, 1, 2, 3, 4, 5],                // M1 (0–5)
  //   Array.from({ length: 10 }, (_, i) => i),  // M2
  //   [0, 1, 2, 3, 4, 5],                // S1 (0–5)
  //   Array.from({ length: 10 }, (_, i) => i)   // S2
  // ];

  // ngOnInit(): void {
  //   this.updateTime();
  //   setInterval(() => this.updateTime(), 1000);
  // }

  // updateTime(): void {
  //   const now = new Date();
  //   const timeStr =
  //     now.getHours().toString().padStart(2, '0') +
  //     now.getMinutes().toString().padStart(2, '0') +
  //     now.getSeconds().toString().padStart(2, '0');
  //   this.currentTimeDigits = timeStr.split('').map(Number);
  // }

  // trackByIndex(index: number, _: any): number {
  //   return index;
  // }

  // getBarNumbers(index: number): number[] {
  //   return this.barDigitRanges[index];
  // }

  // getMarginTop(digit: number, index: number): number {
  //   const bar = this.barDigitRanges[index];
  //   const digitIndex = bar.indexOf(digit);
  //   const halfViewport = this.getColumnViewportHeight(index) / 2;
  //   const marginTop = -1 * digitIndex * this.digitHeight + halfViewport - (this.digitHeight / 2);
  //   return marginTop;
  // }

  // getColumnViewportHeight(index: number): number {
  //   // fixed visible area height (show one digit centered)
  //   return this.digitHeight * 5; // show 5 digits visible space
  //   // return this.barDigitRanges[index].length * this.digitHeight;
  // }

  // currentTimeDigits: number[] = [];
  // digitHeight = 30; // px per digit
  // selectedTimezone: string = Intl.DateTimeFormat().resolvedOptions().timeZone; // Default to device timezone
  // timezoneControl = new FormControl('');
  // filteredTimezones!: Observable<{ city: string; timezone: string }[]>;

  // // Sample list of cities and their IANA timezones
  // timezones: { city: string; timezone: string }[] = [
  //   { city: 'New York', timezone: 'America/New_York' },
  //   { city: 'London', timezone: 'Europe/London' },
  //   { city: 'Tokyo', timezone: 'Asia/Tokyo' },
  //   { city: 'Sydney', timezone: 'Australia/Sydney' },
  //   { city: 'Paris', timezone: 'Europe/Paris' },
  //   { city: 'Dubai', timezone: 'Asia/Dubai' },
  //   { city: 'Singapore', timezone: 'Asia/Singapore' },
  //   { city: 'Los Angeles', timezone: 'America/Los_Angeles' }
  // ];

  // barDigitRanges: number[][] = [
  //   [0, 1, 2], // H1 (0–2)
  //   Array.from({ length: 10 }, (_, i) => i), // H2
  //   [0, 1, 2, 3, 4, 5], // M1 (0–5)
  //   Array.from({ length: 10 }, (_, i) => i), // M2
  //   [0, 1, 2, 3, 4, 5], // S1 (0–5)
  //   Array.from({ length: 10 }, (_, i) => i) // S2
  // ];

  // ngOnInit(): void {
  //   // Initialize dropdown filtering
  //   this.filteredTimezones = this.timezoneControl.valueChanges.pipe(
  //     startWith(''),
  //     map(value => this._filterTimezones(value || ''))
  //   );

  //   // Set default timezone to device timezone
  //   this.timezoneControl.setValue(
  //     this.timezones.find(tz => tz.timezone === this.selectedTimezone)?.city || ''
  //   );

  //   // Update time immediately and every second
  //   this.updateTime();
  //   setInterval(() => this.updateTime(), 1000);
  // }

  // private _filterTimezones(value: string): { city: string; timezone: string }[] {
  //   const filterValue = value.toLowerCase();
  //   return this.timezones.filter(option =>
  //     option.city.toLowerCase().includes(filterValue)
  //   );
  // }

  // onTimezoneSelected(event: any): void {
  //   const selectedCity = event.option.value;
  //   const selected = this.timezones.find(tz => tz.city === selectedCity);
  //   if (selected) {
  //     this.selectedTimezone = selected.timezone;
  //     this.updateTime();
  //   }
  // }

  // updateTime(): void {
  //   const now = new Date();
  //   const timeStr = formatInTimeZone(
  //     now,
  //     this.selectedTimezone,
  //     'HHmmss'
  //   );
  //   this.currentTimeDigits = timeStr.split('').map(Number);
  // }

  // trackByIndex(index: number, _: any): number {
  //   return index;
  // }

  // getBarNumbers(index: number): number[] {
  //   return this.barDigitRanges[index];
  // }

  // getMarginTop(digit: number, index: number): number {
  //   const bar = this.barDigitRanges[index];
  //   const digitIndex = bar.indexOf(digit);
  //   const halfViewport = this.getColumnViewportHeight(index) / 2;
  //   const marginTop = -1 * digitIndex * this.digitHeight + halfViewport - (this.digitHeight / 2);
  //   return marginTop;
  // }

  // getColumnViewportHeight(index: number): number {
  //   return this.digitHeight * 5; // Show 5 digits visible space
  // }

  // currentTimeDigits: number[] = [];
  // digitHeight = 30; // px per digit
  // defaultTimezone: string = Intl.DateTimeFormat().resolvedOptions().timeZone; // Device timezone
  // selectedTimezone: string = this.defaultTimezone; // Initialize to device timezone
  // timezoneControl = new FormControl('');
  // filteredTimezones!: Observable<{ city: string; timezone: string }[]>;

  // // Expanded list of cities and their IANA timezones
  // timezones: { city: string; timezone: string }[] = [
  //   { city: 'New York', timezone: 'America/New_York' },
  //   { city: 'Los Angeles', timezone: 'America/Los_Angeles' },
  //   { city: 'Chicago', timezone: 'America/Chicago' },
  //   { city: 'Toronto', timezone: 'America/Toronto' },
  //   { city: 'London', timezone: 'Europe/London' },
  //   { city: 'Paris', timezone: 'Europe/Paris' },
  //   { city: 'Berlin', timezone: 'Europe/Berlin' },
  //   { city: 'Moscow', timezone: 'Europe/Moscow' },
  //   { city: 'Tokyo', timezone: 'Asia/Tokyo' },
  //   { city: 'Singapore', timezone: 'Asia/Singapore' },
  //   { city: 'Hong Kong', timezone: 'Asia/Hong_Kong' },
  //   { city: 'Shanghai', timezone: 'Asia/Shanghai' },
  //   { city: 'Sydney', timezone: 'Australia/Sydney' },
  //   { city: 'Melbourne', timezone: 'Australia/Melbourne' },
  //   { city: 'Dubai', timezone: 'Asia/Dubai' },
  //   { city: 'Mumbai', timezone: 'Asia/Kolkata' },
  //   { city: 'New Delhi', timezone: 'Asia/Kolkata' },
  //   { city: 'Bangkok', timezone: 'Asia/Bangkok' },
  //   { city: 'Seoul', timezone: 'Asia/Seoul' },
  //   { city: 'Jakarta', timezone: 'Asia/Jakarta' },
  //   { city: 'Cape Town', timezone: 'Africa/Johannesburg' },
  //   { city: 'Lagos', timezone: 'Africa/Lagos' },
  //   { city: 'Rio de Janeiro', timezone: 'America/Sao_Paulo' },
  //   { city: 'Buenos Aires', timezone: 'America/Argentina/Buenos_Aires' },
  //   { city: 'Mexico City', timezone: 'America/Mexico_City' }
  // ];

  // barDigitRanges: number[][] = [
  //   [0, 1, 2], // H1 (0–2)
  //   Array.from({ length: 10 }, (_, i) => i), // H2
  //   [0, 1, 2, 3, 4, 5], // M1 (0–5)
  //   Array.from({ length: 10 }, (_, i) => i), // M2
  //   [0, 1, 2, 3, 4, 5], // S1 (0–5)
  //   Array.from({ length: 10 }, (_, i) => i) // S2
  // ];

  // ngOnInit(): void {
  //   // Initialize dropdown filtering
  //   this.filteredTimezones = this.timezoneControl.valueChanges.pipe(
  //     startWith(''),
  //     map(value => this._filterTimezones(value || ''))
  //   );

  //   // Handle clearing of search box
  //   this.timezoneControl.valueChanges.subscribe(value => {
  //     if (!value) {
  //       this.selectedTimezone = this.defaultTimezone;
  //       this.updateTime();
  //     }
  //   });

  //   // Set default timezone to device timezone
  //   this.timezoneControl.setValue(
  //     this.timezones.find(tz => tz.timezone === this.selectedTimezone)?.city || ''
  //   );

  //   // Update time immediately and every second
  //   this.updateTime();
  //   setInterval(() => this.updateTime(), 1000);
  // }

  // private _filterTimezones(value: string): { city: string; timezone: string }[] {
  //   const filterValue = value.toLowerCase();
  //   return this.timezones.filter(option =>
  //     option.city.toLowerCase().includes(filterValue)
  //   );
  // }

  // onTimezoneSelected(event: any): void {
  //   const selectedCity = event.option.value;
  //   const selected = this.timezones.find(tz => tz.city === selectedCity);
  //   if (selected) {
  //     this.selectedTimezone = selected.timezone;
  //     this.timezoneControl.setValue(selectedCity); // Keep the selected city in the input
  //     this.updateTime();
  //   }
  // }

  // updateTime(): void {
  //   const now = new Date();
  //   const timeStr = formatInTimeZone(
  //     now,
  //     this.selectedTimezone,
  //     'HHmmss'
  //   );
  //   this.currentTimeDigits = timeStr.split('').map(Number);
  // }

  // trackByIndex(index: number, _: any): number {
  //   return index;
  // }

  // getBarNumbers(index: number): number[] {
  //   return this.barDigitRanges[index];
  // }

  // getMarginTop(digit: number, index: number): number {
  //   const bar = this.barDigitRanges[index];
  //   const digitIndex = bar.indexOf(digit);
  //   const halfViewport = this.getColumnViewportHeight(index) / 2;
  //   const marginTop = -1 * digitIndex * this.digitHeight + halfViewport - (this.digitHeight / 2);
  //   return marginTop;
  // }

  // getColumnViewportHeight(index: number): number {
  //   return this.digitHeight * 5; // Show 5 digits visible space
  // }

  currentTimeDigits: number[] = [];
  digitHeight = 30; // px per digit
  defaultTimezone: string = Intl.DateTimeFormat().resolvedOptions().timeZone; // Device timezone
  selectedTimezone: string = this.defaultTimezone; // Initialize to device timezone

  // Expanded list of cities and their IANA timezones, with Local Time option
  timezones: { city: string; timezone: string }[] = [
    { city: 'Local Time', timezone: this.defaultTimezone },
    { city: 'New York', timezone: 'America/New_York' },
    { city: 'Los Angeles', timezone: 'America/Los_Angeles' },
    { city: 'Chicago', timezone: 'America/Chicago' },
    { city: 'Toronto', timezone: 'America/Toronto' },
    { city: 'London', timezone: 'Europe/London' },
    { city: 'Paris', timezone: 'Europe/Paris' },
    { city: 'Berlin', timezone: 'Europe/Berlin' },
    { city: 'Moscow', timezone: 'Europe/Moscow' },
    { city: 'Tokyo', timezone: 'Asia/Tokyo' },
    { city: 'Singapore', timezone: 'Asia/Singapore' },
    { city: 'Hong Kong', timezone: 'Asia/Hong_Kong' },
    { city: 'Shanghai', timezone: 'Asia/Shanghai' },
    { city: 'Sydney', timezone: 'Australia/Sydney' },
    { city: 'Melbourne', timezone: 'Australia/Melbourne' },
    { city: 'Dubai', timezone: 'Asia/Dubai' },
    { city: 'Mumbai', timezone: 'Asia/Kolkata' },
    { city: 'New Delhi', timezone: 'Asia/Kolkata' },
    { city: 'Bangkok', timezone: 'Asia/Bangkok' },
    { city: 'Seoul', timezone: 'Asia/Seoul' },
    { city: 'Jakarta', timezone: 'Asia/Jakarta' },
    { city: 'Cape Town', timezone: 'Africa/Johannesburg' },
    { city: 'Lagos', timezone: 'Africa/Lagos' },
    { city: 'Rio de Janeiro', timezone: 'America/Sao_Paulo' },
    { city: 'Buenos Aires', timezone: 'America/Argentina/Buenos_Aires' },
    { city: 'Mexico City', timezone: 'America/Mexico_City' }
  ];

  barDigitRanges: number[][] = [
    [0, 1, 2], // H1 (0–2)
    Array.from({ length: 10 }, (_, i) => i), // H2
    [0, 1, 2, 3, 4, 5], // M1 (0–5)
    Array.from({ length: 10 }, (_, i) => i), // M2
    [0, 1, 2, 3, 4, 5], // S1 (0–5)
    Array.from({ length: 10 }, (_, i) => i) // S2
  ];

  ngOnInit(): void {
    // Update time immediately and every second
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  onTimezoneChange(timezone: string): void {
    this.selectedTimezone = timezone || this.defaultTimezone;
    this.updateTime();
  }

  updateTime(): void {
    const now = new Date();
    const timeStr = formatInTimeZone(
      now,
      this.selectedTimezone,
      'HHmmss'
    );
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
    return this.digitHeight * 5; // Show 5 digits visible space
  }
}