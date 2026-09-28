import { Component } from '@angular/core';
import { ENLACES_SOCIALES } from '../enlaces';

@Component({
  imports: [],
  standalone: true,
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  public anio: number = new Date().getFullYear();
  public institucion: string = 'Universidad del Cauca';
  public enlaces = ENLACES_SOCIALES;
}