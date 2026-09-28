import { Component } from '@angular/core';

interface ImagenPromocion {
  src: string;
  alt: string;
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [],
  templateUrl: './carrusel.html',
  styleUrl: './carrusel.css',
})
export class Carrusel {
  public imagenes: ImagenPromocion[] = [
    {
      src: 'imagenes/promocion1.png',
      alt: 'Promo 1',
      titulo: 'Chequeo general con descuento',
      descripcion: 'Valoración completa con nuestros especialistas este mes.',
    },
    {
      src: 'imagenes/promocion2.png',
      alt: 'Promo 2',
      titulo: 'Jornada de salud familiar',
      descripcion: 'Trae a tu familia y agenda varias citas el mismo día.',
    },
    {
      src: 'imagenes/promocion3.png',
      alt: 'Promo 3',
      titulo: 'Atención prioritaria',
      descripcion: 'Reserva anticipada con nuestros médicos más solicitados.',
    },
  ];
}