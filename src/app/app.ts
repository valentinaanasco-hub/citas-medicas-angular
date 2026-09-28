import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { Navbar } from './navbar/navbar';
import { Carrusel } from './carrusel/carrusel';
import { Medicos } from './medicos/medicos';
import { Registro} from './registro/registro';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    Navbar,
    Carrusel,
    Medicos,
    Registro,
    Footer,
    Footer
],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'Sistema de Agendamiento de Citas Médicas';
}