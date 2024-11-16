import { Component } from '@angular/core';
interface Submenus {
  [key: string]: boolean;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isOpen: boolean = false;
  openSubmenus: Submenus = {};

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  toggleSubmenu(key: string): void {
    this.openSubmenus[key] = !this.openSubmenus[key];
  }

  isSubmenuOpen(key: string): boolean {
    return this.openSubmenus[key] || false;
  }
}
