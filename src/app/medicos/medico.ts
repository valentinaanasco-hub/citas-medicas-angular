export interface Medico {
  id: number;
  nombre: string;
  especialidad: string;
  aniosExperiencia: number;
  descripcion: string;
  horario: string;
  imagen: string;
}

export interface Especialidad {
  clave: string;
  nombre: string;
}