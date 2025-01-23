import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {
  darkMode: boolean = false; // Default

  constructor() { }

  init(){
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const savedMode = localStorage.getItem('themeMode');

    if (savedMode !== null) {
      // Apply saved theme (overrides system preference)
      this.darkMode = savedMode === 'dark';
      this.toggleDarkPalette(this.darkMode);
    } else {
      // No saved state, use system preference
      this.initializeDarkPalette(prefersDark.matches);
    }
  }

  darkmodeChange(event: { detail: { checked: boolean } }) {
    const isDarkMode = event.detail.checked;
    this.toggleDarkPalette(isDarkMode);

    localStorage.setItem('themeMode', isDarkMode ? 'dark' : 'light');
  }

  initializeDarkPalette(isDark: boolean) {
    this.darkMode = isDark;
    this.toggleDarkPalette(isDark);
  }
  
  private toggleDarkPalette(isDark: boolean) {
    document.documentElement.classList.toggle('ion-palette-dark', isDark);
  }
}