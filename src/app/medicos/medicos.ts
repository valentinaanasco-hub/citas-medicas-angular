import { Component } from '@angular/core';
import { Medico, Especialidad } from './medico';

@Component({
  selector: 'app-medicos',
  standalone: true,
  imports: [],
  templateUrl: './medicos.html',
  styleUrl: './medicos.css',
})
export class Medicos {
  public especialidades: Especialidad[] = [
    { clave: 'terapia-neural', nombre: 'Terapia Neural' },
    { clave: 'quiropraxia', nombre: 'Quiropraxia' },
    { clave: 'fisioterapia', nombre: 'Fisioterapia' },
    { clave: 'nutricion', nombre: 'Nutrición y Dietética Terapéutica' },
    { clave: 'cardiologia', nombre: 'Cardiología' },
    { clave: 'pediatria', nombre: 'Pediatría' },
    { clave: 'dermatologia', nombre: 'Dermatología' },
    { clave: 'neurologia', nombre: 'Neurología' },
    { clave: 'ortopedia', nombre: 'Ortopedia' },
  ];

  private descripciones: { [clave: string]: string } = {
    'terapia-neural': 'La Terapia Neural regula el sistema nervioso mediante anestésicos locales.',
    quiropraxia: 'La Quiropraxia corrige desalineaciones en la columna para mejorar el sistema neuromúsculo-esquelético.',
    fisioterapia: 'La Fisioterapia rehabilita la función física y el movimiento mediante ejercicios y agentes físicos.',
    nutricion: 'La Nutrición diseña planes alimenticios personalizados para optimizar la salud y prevenir enfermedades.',
    cardiologia: 'La Cardiología diagnostica y trata las enfermedades del corazón y del sistema circulatorio.',
    pediatria: 'La Pediatría brinda atención médica integral a bebés, niños y adolescentes.',
    dermatologia: 'La Dermatología se encarga del cuidado, diagnóstico y tratamiento de la piel, pelo y uñas.',
    neurologia: 'La Neurología trata los trastornos del cerebro, la médula espinal y los nervios periféricos.',
    ortopedia: 'La Ortopedia corrige y trata las lesiones y enfermedades del sistema osteoarticular.',
  };

  /** Color de acento por especialidad, para diferenciar visualmente cada tarjeta de médico */
  private coloresEspecialidad: { [especialidad: string]: string } = {
    'Cardiología': '#C4574B',
    'Pediatría': '#3E8FB0',
    'Dermatología': '#B08968',
    'Neurología': '#6C63A6',
    'Ortopedia': '#3E8E6E',
  };

  public descripcionEspecialidad = '';
  public especialidadSeleccionada = '';

  public medicos: Medico[] = [
    {
      id: 1,
      nombre: 'Dr. Miranda Bailey',
      especialidad: 'Cardiología',
      aniosExperiencia: 8,
      descripcion: 'Enfocada en el diagnostico y cuidado preventivo del corazón.',
      horario: 'Lunes a viernes, 8am - 4pm',
      imagen: 'imagenes/doctor1.webp',
    },
    {
      id: 2,
      nombre: 'Dr. James Wilson',
      especialidad: 'Pediatría',
      aniosExperiencia: 12,
      descripcion: 'Especialista en el desarrollo y bienestar de niños y adolescentes.',
      horario: 'Lunes a sábado, 9am - 5pm',
      imagen: 'imagenes/doctor2.jpg',
    },
    {
      id: 3,
      nombre: 'Dr. Meredith Grey',
      especialidad: 'Dermatología',
      aniosExperiencia: 10,
      descripcion: 'Especialista en el tratamiento, diagnostico y cuidado de la piel y tratamientos estéticos.',
      horario: 'Martes a viernes, 10am - 6pm',
      imagen: 'imagenes/doctor3.webp',
    },
    {
      id: 4,
      nombre: 'Dr. Cristina Yang',
      especialidad: 'Dermatología',
      aniosExperiencia: 8,
      descripcion: 'Especialista en el diagnóstico y tratamiento de afecciones cutáneas, abarcando también pelo, uñas y mucosas.',
      horario: 'Martes a sábado, 10am - 6pm',
      imagen: 'imagenes/doctor4.webp',
    },
    {
      id: 5,
      nombre: 'Dr. Gregory House',
      especialidad: 'Neurología',
      aniosExperiencia: 15,
      descripcion: 'Especialista en el diagnóstico y tratamiento de trastornos del sistema nervioso.',
      horario: 'Lunes a viernes, 9am - 5pm',
      imagen: 'imagenes/doctor5.jpg',
    },
    {
      id: 6,
      nombre: 'Dr. Shaun Murphy',
      especialidad: 'Ortopedia',
      aniosExperiencia: 20,
      descripcion: 'Especialista en el diagnóstico y tratamiento de trastornos musculoesqueléticos.',
      horario: 'Lunes a viernes, 8am - 4pm',
      imagen: 'imagenes/doctor6.jpg',
    },
  ];

  mostrarDescripcion(clave: string): void {
    this.descripcionEspecialidad = this.descripciones[clave] || 'Descripción no disponible.';
    this.especialidadSeleccionada = clave;
  }

  colorPorEspecialidad(especialidad: string): string {
    return this.coloresEspecialidad[especialidad] || 'var(--color-primary)';
  }
}