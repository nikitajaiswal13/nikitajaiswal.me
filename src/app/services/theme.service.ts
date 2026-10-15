import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode = false;

  constructor() {
    this.initTheme();
  }

  private initTheme() {
    if (typeof window === 'undefined') return;
    try {
      const saved = localStorage.getItem('theme');
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDarkMode = saved === 'dark' || (!saved && prefersDark);
      this.applyTheme();
    } catch (e) {
      this.isDarkMode = false;
    }
  }

  get isDark(): boolean {
    return this.isDarkMode;
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
      } catch (e) {}
    }
    this.applyTheme();
  }

  private applyTheme() {
    if (typeof document === 'undefined') return;
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
