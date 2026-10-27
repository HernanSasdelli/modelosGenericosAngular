import { AbstractControl, ValidationErrors } from '@angular/forms';

// min 8 caracteres, una mayuscula y un numero
export function contrasenaSegura(control: AbstractControl): ValidationErrors | null {
  const valor = control.value;

  if (!valor) {
    return null; // si esta vacio se encarga el required
  }

  const tieneMayuscula = /[A-Z]/.test(valor);
  const tieneNumero = /[0-9]/.test(valor);
  const largoOk = valor.length >= 8;

  if (tieneMayuscula && tieneNumero && largoOk) {
    return null;
  }
  return { contrasenaSegura: true };
}

// validador de grupo, compara contrasena con repetir
export function clavesIguales(grupo: AbstractControl): ValidationErrors | null {
  const contrasena = grupo.get('contrasena')?.value;
  const repetir = grupo.get('repetir')?.value;

  if (contrasena === repetir) {
    return null;
  }
  return { clavesIguales: true };
}
