import { Component, OnInit, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'akmal-fe-ng17';
  isModalOpen = false;
  osInfo: string = '';
  browserInfo: string = '';
  modalMessage: string = '';
  readonly modalStorageKey = 'deviceInfoModalShown';


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.detectOSAndBrowser();
      this.toggleDarkMode();
      this.checkModalStatus();
    }
  }

  detectOSAndBrowser(): void {
    const userAgent = window.navigator.userAgent;
    let isCompatible = false;

    // Detect OS
    if (userAgent.indexOf('Windows NT 10.0') !== -1) {
      this.osInfo = 'Windows 10';
      isCompatible = true;
    } else if (userAgent.indexOf('Windows NT 6.3') !== -1) {
      this.osInfo = 'Windows 8.1';
      isCompatible = true;
    } else if (userAgent.indexOf('Windows NT 6.2') !== -1) {
      this.osInfo = 'Windows 8';
      isCompatible = true;
    } else if (userAgent.indexOf('Windows NT 6.1') !== -1) {
      this.osInfo = 'Windows 7';
      isCompatible = false;
    } else if (userAgent.indexOf('Windows NT 6.0') !== -1) {
      this.osInfo = 'Windows Vista';
      isCompatible = false;
    } else if (userAgent.indexOf('Windows NT 5.1') !== -1) {
      this.osInfo = 'Windows XP';
      isCompatible = false;
    } else if (userAgent.indexOf('Mac') !== -1) {
      this.osInfo = 'MacOS';
      isCompatible = true;
    } else if (userAgent.indexOf('Linux') !== -1) {
      this.osInfo = 'Linux';
      isCompatible = true;
    } else if (userAgent.indexOf('Android') !== -1) {
      this.osInfo = 'Android';
      isCompatible = true;
    } else if (userAgent.indexOf('like Mac') !== -1) {
      this.osInfo = 'iOS';
      isCompatible = true;
    } else {
      this.osInfo = 'Unknown OS';
      isCompatible = false;
    }

    // Detect Browser
    if (userAgent.indexOf('Chrome') !== -1) {
      this.browserInfo = 'Chrome';
    } else if (userAgent.indexOf('Safari') !== -1) {
      this.browserInfo = 'Safari';
    } else if (userAgent.indexOf('Firefox') !== -1) {
      this.browserInfo = 'Firefox';
    } else if (userAgent.indexOf('MSIE') !== -1 || !!document.DOCUMENT_NODE) {
      this.browserInfo = 'Internet Explorer';
    } else if (userAgent.indexOf('Edge') !== -1) {
      this.browserInfo = 'Edge';
    } else {
      this.browserInfo = 'Unknown Browser';
    }

    // Set modal message based on compatibility
    if (isCompatible) {
      this.modalMessage = `This device (${this.osInfo}) is compatible with the system.`;
    } else {
      this.modalMessage = `This device (${this.osInfo}) is not compatible with the system.`;
    }
  }


  toggleDarkMode() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }

  checkModalStatus(): void {
    const modalShown = localStorage.getItem(this.modalStorageKey);
    if (!modalShown) {
      this.openModal();
    }
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    localStorage.setItem(this.modalStorageKey, 'true');
  }
}
