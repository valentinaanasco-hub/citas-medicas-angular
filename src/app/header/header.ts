import { Component } from '@angular/core';
import { ENLACES_SOCIALES } from '../enlaces';

@Component({
  imports: [],
  standalone: true,
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class HeaderComponent {
  public tituloSistema: string = 'Sistema de Agendamiento de Citas Médicas';
  public nombreInstitucion: string = 'Universidad del Cauca';
  public enlaces = ENLACES_SOCIALES;
}