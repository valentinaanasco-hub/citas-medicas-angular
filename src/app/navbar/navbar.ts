import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  standalone: true,
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  public enlaces = [
    { texto: 'Home', href: '#' },
    { texto: 'Sección 1', href: '#seccion1' },
    { texto: 'Sección 2', href: '#seccion2' },
    { texto: 'Sección 3', href: '#seccion3' },
  ];
}