import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ErroresPaciente {
  nombres: string;
  apellidos: string;
  tipoIdentificacion: string;
  numeroIdentificacion: string;
  genero: string;
}

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  public nombres = '';
  public apellidos = '';
  public tipoIdentificacion = '';
  public numeroIdentificacion = '';
  public genero = '';

  public errores: ErroresPaciente = {
    nombres: '', apellidos: '', tipoIdentificacion: '', numeroIdentificacion: '', genero: '',
  };

  public mensaje = '';
  public tipoMensaje: 'exito' | 'error' | '' = '';

  private validarCampoObligatorio(valor: string, mensajeError: string): string {
    return valor.trim() === '' ? mensajeError : '';
  }

  private validarLongitud(valor: string, min: number, max: number, mensajeError: string): string {
    const longitud = valor.trim().length;
    return longitud < min || longitud > max ? mensajeError : '';
  }

  private validarNumeroPositivo(valor: string, mensajeError: string): string {
    const numero = Number(valor);
    return isNaN(numero) || numero <= 0 ? mensajeError : '';
  }

  validarNombres(): void {
    this.errores.nombres =
      this.validarCampoObligatorio(this.nombres, 'El nombre es obligatorio') ||
      this.validarLongitud(this.nombres, 1, 20, 'El nombre debe tener entre 1 y 20 caracteres');
  }

  validarApellidos(): void {
    this.errores.apellidos =
      this.validarCampoObligatorio(this.apellidos, 'El apellido es obligatorio') ||
      this.validarLongitud(this.apellidos, 1, 20, 'El apellido debe tener entre 1 y 20 caracteres');
  }

  validarTipoIdentificacion(): void {
    this.errores.tipoIdentificacion =
      this.tipoIdentificacion === '' ? 'Debe seleccionar un tipo de identificación' : '';
  }

  validarNumeroIdentificacion(): void {
    this.errores.numeroIdentificacion =
      this.validarCampoObligatorio(this.numeroIdentificacion, 'El número de identificación es obligatorio') ||
      this.validarNumeroPositivo(this.numeroIdentificacion, 'El número de identificación debe ser un número mayor a 0');
  }

  validarGenero(): void {
    this.errores.genero = this.genero === '' ? 'Debe seleccionar un género' : '';
  }

  private formularioValido(): boolean {
    this.validarNombres();
    this.validarApellidos();
    this.validarTipoIdentificacion();
    this.validarNumeroIdentificacion();
    this.validarGenero();

    return (
      !this.errores.nombres && !this.errores.apellidos && !this.errores.tipoIdentificacion &&
      !this.errores.numeroIdentificacion && !this.errores.genero
    );
  }

  registrar(): void {
    if (!this.formularioValido()) {
      this.mensaje = 'Por favor corrige los errores del formulario';
      this.tipoMensaje = 'error';
      return;
    }

    this.mensaje = `Paciente ${this.nombres} ${this.apellidos} registrado con éxito`;
    this.tipoMensaje = 'exito';
    this.limpiarFormulario();
  }

  private limpiarFormulario(): void {
    this.nombres = '';
    this.apellidos = '';
    this.tipoIdentificacion = '';
    this.numeroIdentificacion = '';
    this.genero = '';
    this.errores = { nombres: '', apellidos: '', tipoIdentificacion: '', numeroIdentificacion: '', genero: '' };
  }
}