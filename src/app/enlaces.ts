export interface EnlaceSocial {
  nombre: string;
  url: string;
  icono: string;
  externo: boolean;
}

/**
 * Enlaces de contacto compartidos por el header y el footer.
 * Cambia aquí tus datos reales y se actualizan en ambos componentes.
 */
export const ENLACES_SOCIALES: EnlaceSocial[] = [
  { nombre: 'GitHub', url: 'https://github.com', icono: 'fab fa-github', externo: true },
  { nombre: 'LinkedIn', url: 'https://www.linkedin.com/in', icono: 'fab fa-linkedin', externo: true },
  { nombre: 'Correo', url: 'mailto:valentinaanasco@unicauca.edu.co', icono: 'fas fa-envelope', externo: false },
];