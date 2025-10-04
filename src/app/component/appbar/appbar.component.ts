import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { menuConfig } from './menu-config';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

interface MenuItem {
  link: string;
  name: string;
  icon: string;
  hasSubMenu?: boolean;
  subMenu?: MenuItem[];
}

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrl: './appbar.component.css'
})
export class AppbarComponent {
  @Input() role: string = 'all'; // Default role set to 'employer'
  menuItems: any[] = [];

  isDrawerOpen = false;
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  isDarkMode = false;

  ngOnInit(): void {
    this.isDrawerOpen = true;
    this.loadMenuItems();

    if (isPlatformBrowser(this.platformId)) {
      // const savedTheme = localStorage.getItem('theme');
      // if (savedTheme) {
      //   this.isDarkMode = savedTheme === 'dark';
      //   this.updateTheme();
      // }

      const savedTheme = localStorage.getItem('theme');
      this.isDarkMode = savedTheme === 'dark';
      this.updateTheme();
    }
  }

  isActive(link: string): boolean {
    return this.router.url === link;
  }

  isSubMenuActive(item: MenuItem): boolean {
    if (this.isActive(item.link)) {
      return true;
    }
    return (
      item.subMenu?.some((subItem) => this.isActive(subItem.link)) || false
    );
  }

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
    // this.drawerStateService.setDrawerState(this.isDrawerOpen);
  }

  loadMenuItems(): void {
    this.menuItems = menuConfig[this.role] || [];
  }

  logout(): void {
    // Clear user data from local storage
    localStorage.removeItem('userData');

    // Redirect to the sign-in page
    this.router.navigate(['/sign-in']);
  }

  toggleTheme(event: Event) {
    const checkbox = event.target as HTMLInputElement; // Get the checkbox element
    this.isDarkMode = checkbox.checked; // Set isDarkMode based on checkbox state
    this.updateTheme(); // Update the theme based on the new state
  }

  updateTheme() {
    const theme = this.isDarkMode ? 'dark' : 'light';
    document.body.setAttribute('data-theme', theme); // Set the data-theme attribute
    localStorage.setItem('theme', theme); // Save the theme preference in local storage
  }
}
