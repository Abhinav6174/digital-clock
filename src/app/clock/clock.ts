import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { formatInTimeZone } from 'date-fns-tz';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clock',
  imports: [CommonModule, ReactiveFormsModule,
    FormsModule],
  templateUrl: './clock.html',
  styleUrl: './clock.css',
  encapsulation: ViewEncapsulation.None
})
export class Clock {
  currentTimeDigits: number[] = [];
  digitHeight = 30; // px per digit
  defaultTimezone: string = Intl.DateTimeFormat().resolvedOptions().timeZone; // Device timezone
  selectedTimezone: string = this.defaultTimezone; // Initialize to device timezone

  timezones1: { city: string; timezone: string }[] = [
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

  timezones: { region: string; city: string; timezone: string }[] = [
    { region: 'Local', city: 'Local Time', timezone: this.defaultTimezone },

    { region: 'North America', city: 'New York', timezone: 'America/New_York' },
    { region: 'North America', city: 'Chicago', timezone: 'America/Chicago' },
    { region: 'North America', city: 'Los Angeles', timezone: 'America/Los_Angeles' },
    { region: 'North America', city: 'Toronto', timezone: 'America/Toronto' },
    { region: 'North America', city: 'Mexico City', timezone: 'America/Mexico_City' },

    { region: 'South America', city: 'Rio de Janeiro', timezone: 'America/Sao_Paulo' },
    { region: 'South America', city: 'Buenos Aires', timezone: 'America/Argentina/Buenos_Aires' },

    { region: 'Europe', city: 'London', timezone: 'Europe/London' },
    { region: 'Europe', city: 'Paris', timezone: 'Europe/Paris' },
    { region: 'Europe', city: 'Berlin', timezone: 'Europe/Berlin' },
    { region: 'Europe', city: 'Madrid', timezone: 'Europe/Madrid' },
    { region: 'Europe', city: 'Rome', timezone: 'Europe/Rome' },
    { region: 'Europe', city: 'Moscow', timezone: 'Europe/Moscow' },

    { region: 'Asia', city: 'Dubai', timezone: 'Asia/Dubai' },
    { region: 'Asia', city: 'Mumbai', timezone: 'Asia/Kolkata' },
    { region: 'Asia', city: 'Bangkok', timezone: 'Asia/Bangkok' },
    { region: 'Asia', city: 'Singapore', timezone: 'Asia/Singapore' },
    { region: 'Asia', city: 'Hong Kong', timezone: 'Asia/Hong_Kong' },
    { region: 'Asia', city: 'Shanghai', timezone: 'Asia/Shanghai' },
    { region: 'Asia', city: 'Tokyo', timezone: 'Asia/Tokyo' },
    { region: 'Asia', city: 'Seoul', timezone: 'Asia/Seoul' },
    { region: 'Asia', city: 'Jakarta', timezone: 'Asia/Jakarta' },
    { region: 'Asia', city: 'Manila', timezone: 'Asia/Manila' },

    { region: 'Oceania', city: 'Sydney', timezone: 'Australia/Sydney' },
    { region: 'Oceania', city: 'Melbourne', timezone: 'Australia/Melbourne' },
    { region: 'Oceania', city: 'Auckland', timezone: 'Pacific/Auckland' },

    { region: 'Africa', city: 'Cape Town', timezone: 'Africa/Johannesburg' },
    { region: 'Africa', city: 'Nairobi', timezone: 'Africa/Nairobi' },
    { region: 'Africa', city: 'Lagos', timezone: 'Africa/Lagos' },
    { region: 'Africa', city: 'Cairo', timezone: 'Africa/Cairo' },

    { region: 'Other', city: 'Honolulu', timezone: 'Pacific/Honolulu' },
    { region: 'Other', city: 'Anchorage', timezone: 'America/Anchorage' }
  ];

  barDigitRanges: number[][] = [
    [0, 1, 2],
    Array.from({ length: 10 }, (_, i) => i),
    [0, 1, 2, 3, 4, 5],
    Array.from({ length: 10 }, (_, i) => i),
    [0, 1, 2, 3, 4, 5],
    Array.from({ length: 10 }, (_, i) => i)
  ];

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  onTimezoneChange(timezone: string): void {
    this.selectedTimezone = timezone || this.defaultTimezone;
    this.updateTime();
  }

  getGroupedRegions(): string[] {
    return [...new Set(this.timezones.map(t => t.region))];
  }

  getTimezonesByRegion(region: string) {
    return this.timezones.filter(t => t.region === region);
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
    const halfViewport = this.getColumnViewportHeight() / 2;
    const marginTop = -1 * digitIndex * this.digitHeight + halfViewport - (this.digitHeight / 2);
    return marginTop;
  }

  getColumnViewportHeight(): number {
    return this.digitHeight * 5;
  }

  getSelectedCityName(): string {
    return this.timezones.find(t => t.timezone === this.selectedTimezone)?.city || 'Select Timezone';
  }
}